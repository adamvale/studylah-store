import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand } from "@aws-sdk/client-s3";

// Cloudflare R2 (S3-compatible), offsite home for database backups and,
// later, the master content store. Fails closed: without the four R2_* env
// vars every helper is a no-op that reports "not configured".

const config = {
  accessKeyId: process.env.R2_ACCESS_KEY_ID ?? "",
  secretAccessKey: process.env.R2_SECRET_ACCESS_KEY ?? "",
  endpoint: process.env.R2_ENDPOINT ?? "",
  bucket: process.env.R2_BUCKET ?? "",
};

export function r2Configured(): boolean {
  return Boolean(
    config.accessKeyId && config.secretAccessKey && config.endpoint && config.bucket
  );
}

let client: S3Client | null = null;
function r2(): S3Client {
  if (!client) {
    client = new S3Client({
      region: "auto",
      endpoint: config.endpoint,
      credentials: {
        accessKeyId: config.accessKeyId,
        secretAccessKey: config.secretAccessKey,
      },
    });
  }
  return client;
}

export async function r2Put(key: string, body: Buffer, contentType: string): Promise<void> {
  await r2().send(
    new PutObjectCommand({
      Bucket: config.bucket,
      Key: key,
      Body: body,
      ContentType: contentType,
    })
  );
}

export async function r2List(prefix: string): Promise<{ key: string; lastModified?: Date }[]> {
  const res = await r2().send(
    new ListObjectsV2Command({ Bucket: config.bucket, Prefix: prefix })
  );
  return (res.Contents ?? []).map((o) => ({ key: o.Key ?? "", lastModified: o.LastModified }));
}

export async function r2Delete(key: string): Promise<void> {
  await r2().send(new DeleteObjectCommand({ Bucket: config.bucket, Key: key }));
}
