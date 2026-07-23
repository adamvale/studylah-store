import type { Subconcept } from "@/lib/teaching/subconcepts";

// T11 Electromagnetic Waves, section 4. Grounded in KB Chapter 13 (Electromagnetic Waves) section 13.4.
// Conceptual only: no working, no formula. Each teaching body stars 2 to 4 keywords and carries a say.

export const BOXES: Subconcept[] = [
  {
    id: "t11.4",
    code: "T11.4",
    title: "Uses of the spectrum",
    blurb: "Matching each region of the spectrum to the jobs it does for us",
    steps: [
      {
        kind: "concept",
        heading: "The low-frequency end: radio and microwaves",
        body: "*Radio waves* carry broadcasting, RFID tags and Bluetooth. *Microwaves* run mobile-phone masts, satellite links, WiFi, GPS, radar and *microwave ovens*.",
        say: "Start at the long-wavelength end. Radio waves are the workhorse of communication over distance: television and radio broadcasting, the RFID tags on shop items, and Bluetooth links between your devices. Microwaves sit just above them and do the higher-data jobs: mobile-phone masts, satellite links, WiFi, GPS positioning, radar, and of course heating food in a microwave oven.",
      },
      {
        kind: "concept",
        heading: "Infrared and visible light",
        body: "*Infrared* is felt as heat: grills, toasters, TV *remote controls*, thermometers, thermal imaging and fibre-optic data. *Visible light* carries signals down *optical fibres*, lights up endoscopes, and cures dental fillings.",
        say: "Infrared is the heat-carrying region. It cooks in grills and toasters, beams the signal from a television remote control, reads temperatures in a thermometer, shows warm bodies in thermal imaging cameras, and streams data down fibre-optic cables. Visible light, the part we see, also sends signals through optical fibres, lights the inside of the body through an endoscope, and hardens a dentist's filling.",
      },
      {
        kind: "concept",
        heading: "Ultraviolet",
        body: "*Ultraviolet* sterilises water by killing microbes, makes *vitamin D* in the skin, and is used for *security marking* because fluorescent inks glow under it.",
        say: "Ultraviolet is energetic enough to be useful in 3 neat ways. It sterilises water by killing the microbes in it. In small amounts it helps your skin make vitamin D. And it reveals security markings, because special fluorescent inks are invisible in ordinary light but glow brightly under an ultraviolet lamp.",
      },
      {
        kind: "concept",
        heading: "The high-frequency end: X-rays and gamma rays",
        body: "*X-rays* pass through soft tissue to image *bones* and fractures, and build CT scans. *Gamma rays* sterilise medical instruments, treat cancer in *radiotherapy*, and find cracks in metal.",
        say: "At the top end sit the 2 most energetic regions. X-rays slip through soft tissue but are stopped by bone, so they photograph fractures and build detailed CT scans. Gamma rays go further still: they sterilise surgical instruments by killing every microbe, they treat tumours in radiotherapy, and in industry they pass through metal to reveal hidden cracks.",
      },
      {
        kind: "match",
        prompt: "Match each region of the spectrum to a use it is well known for.",
        pairs: [
          { left: "Radio waves", right: "Bluetooth and broadcasting" },
          { left: "Microwaves", right: "Satellite links and GPS" },
          { left: "Infrared", right: "Thermal imaging cameras" },
          { left: "Ultraviolet", right: "Security marking with glowing ink" },
          { left: "X-rays", right: "Imaging broken bones" },
        ],
        ask: "Work from the low-frequency end upward: radio for everyday communication, microwaves for satellites and GPS, infrared for heat and imaging, ultraviolet for glowing inks, X-rays for looking inside the body.",
        hints: [
          "Communication over distance and short links like Bluetooth are radio waves; satellites and GPS are microwaves.",
          "Warm bodies show up in infrared; fluorescent inks glow under ultraviolet; bones show up on X-rays.",
        ],
        explain: "Radio waves handle Bluetooth and broadcasting, microwaves handle satellites and GPS, infrared does thermal imaging, ultraviolet reveals security inks, and X-rays image bones.",
      },
      {
        kind: "classify",
        prompt: "Sort each use under the region of the spectrum that provides it.",
        bins: ["Infrared", "Ultraviolet", "Gamma rays"],
        items: [
          { text: "TV remote control", bin: 0 },
          { text: "Toaster and grill heating", bin: 0 },
          { text: "Making vitamin D in skin", bin: 1 },
          { text: "Sterilising water", bin: 1 },
          { text: "Radiotherapy for cancer", bin: 2 },
          { text: "Finding cracks in metal", bin: 2 },
        ],
        ask: "Infrared is the heat and remote-control region, ultraviolet is the region that reaches the skin and kills microbes in water, and gamma rays are the most penetrating region used in hospitals and industry. Tap each use and drop it in its bin.",
        hints: [
          "Anything about heat or a remote control is infrared; skin and clean water point to ultraviolet.",
          "Treating cancer and passing through metal to find cracks are jobs for gamma rays.",
        ],
        explain: "Remote controls and toaster heating are infrared, vitamin D and water sterilising are ultraviolet, and radiotherapy and finding cracks in metal are gamma rays.",
      },
      {
        kind: "choice",
        question: "Which region of the spectrum is used to sterilise surgical instruments?",
        options: ["Radio waves", "Infrared", "Visible light", "Gamma rays"],
        correct: 3,
        ask: "Sterilising means killing every microbe, so this needs the most energetic, most penetrating region.",
        hints: [
          "The lower-energy regions like radio and infrared cannot kill microbes deep inside sealed packaging.",
          "The region at the very top of the spectrum, above X-rays, does this job.",
        ],
        explain: "Gamma rays sterilise surgical instruments, because they are highly energetic and penetrating enough to kill microbes even through packaging.",
      },
      {
        kind: "choice",
        question: "A patient has a suspected broken arm. Which region of the spectrum is used to image the bones?",
        options: ["X-rays", "Microwaves", "Radio waves", "Ultraviolet"],
        correct: 0,
        ask: "This region passes through soft tissue but is stopped by bone, so bones show up clearly.",
        hints: [
          "Radio waves and microwaves are used for communication, not for imaging inside the body.",
          "The region used for CT scans and fracture photographs sits just below gamma rays.",
        ],
        explain: "X-rays image broken bones, because they pass through soft tissue but are absorbed by bone, showing the skeleton clearly.",
      },
      {
        kind: "choice",
        question: "Which region of the spectrum carries the signal from a television remote control?",
        options: ["Ultraviolet", "Infrared", "Gamma rays", "X-rays"],
        correct: 1,
        ask: "This is the heat-carrying region, the one just below visible light in frequency.",
        hints: [
          "It is the same region used in grills, toasters and thermal imaging cameras.",
          "It sits between microwaves and visible light on the spectrum.",
        ],
        explain: "Infrared carries the remote-control signal, the same region used for grills, thermometers and thermal imaging.",
      },
      {
        kind: "choice",
        question: "RFID tags and Bluetooth both make use of which region of the spectrum?",
        options: ["Gamma rays", "X-rays", "Radio waves", "Ultraviolet"],
        correct: 2,
        ask: "These are short-range communication links, the job of the lowest-frequency region.",
        hints: [
          "The most energetic regions like X-rays and gamma rays are used in medicine, not for wireless links.",
          "The region at the long-wavelength top of the spectrum handles broadcasting too.",
        ],
        explain: "Radio waves are used for RFID tags and Bluetooth, the lowest-frequency region, which also carries broadcasting.",
      },
      {
        kind: "insight",
        body: "The *use* of a region follows its *energy*: low-energy radio and microwaves carry communication, infrared and visible light carry heat and images, and high-energy *ultraviolet, X-rays and gamma rays* sterilise, image and treat.",
        say: "Here is the pattern to keep. A region's job follows its energy. The gentle low-frequency end, radio and microwaves, is for communication over distance. The middle, infrared and visible light, carries heat and images and light-based signals. The energetic high-frequency end, ultraviolet through X-rays to gamma rays, is powerful enough to sterilise, to see inside the body, and to treat disease. Learn the spectrum in order and the uses line up with it.",
      },
    ],
  },
];
