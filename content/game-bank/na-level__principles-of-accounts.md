---
level: na-level
slug: principles-of-accounts
subjectName: Principles of Accounts
family: poa
---

## QUESTIONS

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Riverbend Stationers uses a perpetual inventory system. It buys goods for resale on credit from Meilin Supplies for $840. Which entry records this purchase?"
options:
  - "Dr Inventory $840; Cr Trade payable - Meilin Supplies $840"
  - "Dr Purchases $840; Cr Trade payable - Meilin Supplies $840"
  - "Dr Trade payable - Meilin Supplies $840; Cr Inventory $840"
  - "Dr Inventory $840; Cr Cash at bank $840"
answer: 0
marks: 1
misconception: perpetual-purchases-account
worked: |
  Under perpetual inventory there is no Purchases account - goods bought for resale go straight into the Inventory account.
  Inventory (an asset) increases, so Inventory is debited $840.
  The business now owes Meilin Supplies, so the trade payable (a liability) is credited $840.
  Dr Inventory $840; Cr Trade payable - Meilin Supplies $840.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Riverbend Stationers sells goods on credit for $600. The goods had cost $380. Under perpetual inventory, which SECOND entry records the cost of the goods sold?"
options:
  - "Dr Trade receivable $380; Cr Sales revenue $380"
  - "Dr Cost of sales $380; Cr Inventory $380"
  - "Dr Inventory $380; Cr Cost of sales $380"
  - "Dr Cost of sales $600; Cr Inventory $600"
answer: 1
marks: 1
misconception: perpetual-two-entries
worked: |
  A credit sale under perpetual inventory needs TWO double entries.
  1. The selling price: Dr Trade receivable $600; Cr Sales revenue $600.
  2. The cost: inventory leaves the business at COST, so Dr Cost of sales $380; Cr Inventory $380.
  The second entry uses the cost of $380, never the selling price of $600.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "The owner of Riverbend Stationers takes goods for personal use. The goods cost $150 and would normally sell for $220. Which entry is correct?"
options:
  - "Dr Drawings $220; Cr Sales revenue $220"
  - "Dr Inventory $150; Cr Drawings $150"
  - "Dr Drawings $150; Cr Inventory $150"
  - "Dr Drawings $220; Cr Inventory $220"
answer: 2
marks: 1
misconception: drawings-of-goods-at-selling-price
worked: |
  Goods taken by the owner are recorded at COST, not selling price - no sale has been made and no profit is earned on the owner.
  Drawings increase (equity is reduced): Dr Drawings $150.
  Inventory leaves the business: Cr Inventory $150.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Riverbend Stationers returns faulty goods costing $95 to a supplier. The business uses a perpetual inventory system. Which entry records the return?"
options:
  - "Dr Inventory $95; Cr Trade payable $95"
  - "Dr Purchases returns $95; Cr Trade payable $95"
  - "Dr Trade payable $95; Cr Purchases returns $95"
  - "Dr Trade payable $95; Cr Inventory $95"
answer: 3
marks: 1
misconception: returns-account-under-perpetual
worked: |
  Under perpetual inventory the goods were debited to Inventory when bought, so on return Inventory is credited $95.
  The business now owes the supplier less, so the trade payable is debited $95.
  There is no Purchases returns account in a perpetual system.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Nadia brings her own van, valued at $12,000, into her sole proprietorship for business use. Which journal entry records this?"
options:
  - "Dr Motor vehicles $12,000; Cr Capital $12,000"
  - "Dr Capital $12,000; Cr Motor vehicles $12,000"
  - "Dr Motor vehicles $12,000; Cr Drawings $12,000"
  - "Dr Motor vehicles $12,000; Cr Cash at bank $12,000"
answer: 0
marks: 1
misconception: additional-capital-direction
worked: |
  The business gains a non-current asset: Dr Motor vehicles $12,000.
  The owner has put more resources in, so the amount the business owes the owner rises: Cr Capital $12,000.
  Nothing has been paid out of the bank and this is the opposite of drawings.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "The running-balance ledger of the trade receivable A. Rahim shows: 1 May balance $500 Dr; 8 May credit sale $900; 15 May cash received $700; 20 May sales return $120. What is the balance on 31 May?"
options:
  - "$700 Dr"
  - "$580 Dr"
  - "$580 Cr"
  - "$820 Dr"
answer: 1
marks: 1
misconception: running-balance-sign
worked: |
  Start with the debit balance of $500 (the customer owes the business).
  8 May credit sale: the customer owes more, Dr $900 -> balance $1,400 Dr.
  15 May receipt: Cr $700 -> balance $700 Dr.
  20 May sales return: Cr $120 -> balance $580 Dr.
  A trade receivable normally carries a Dr balance, so the suffix is Dr.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "The Cash at Bank running-balance ledger of Willow Cafe shows: 1 June balance $2,400 Dr; 4 June paid a supplier $1,900; 11 June received from a customer $800; 26 June paid rent $1,500. What is the balance on 30 June?"
options:
  - "$1,800 Dr"
  - "$600 Cr"
  - "$200 Cr"
  - "$200 Dr"
answer: 2
marks: 1
misconception: bank-overdraft-suffix
worked: |
  2,400 Dr - 1,900 = 500 Dr.
  500 Dr + 800 = 1,300 Dr.
  1,300 Dr - 1,500 = -200, i.e. the bank column has swung to the credit side.
  The balance is $200 Cr - the bank account is overdrawn, and an overdraft is a current liability.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Pelican Traders has these balances at 31 December: Capital $30,000; Drawings $4,000; Inventory $9,500; Trade receivables $6,200; Trade payables $5,100; Cash at bank $3,400 Dr; Sales revenue $48,000; Cost of sales $29,000; Other expenses $12,000; Office equipment at cost $25,000; Accumulated depreciation - office equipment $6,000. What is the total of EACH column of the trial balance?"
options:
  - "$85,700"
  - "$95,100"
  - "$83,100"
  - "$89,100"
answer: 3
marks: 1
misconception: trial-balance-column-totals
worked: |
  Debit balances: Drawings 4,000 + Inventory 9,500 + Trade receivables 6,200 + Cash at bank 3,400 + Cost of sales 29,000 + Other expenses 12,000 + Office equipment 25,000 = $89,100.
  Credit balances: Capital 30,000 + Trade payables 5,100 + Sales revenue 48,000 + Accumulated depreciation 6,000 = $89,100.
  Both columns total $89,100, so the trial balance agrees.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Which balance is entered in the DEBIT column of a trial balance?"
options:
  - "Drawings"
  - "Capital"
  - "Allowance for impairment of trade receivables"
  - "Accumulated depreciation - machinery"
answer: 0
marks: 1
misconception: drawings-on-credit-side
worked: |
  Debit balances: assets, expenses and drawings.
  Credit balances: liabilities, capital and income (plus the contra accounts - accumulated depreciation and the allowance for impairment).
  Drawings reduce equity and always carry a debit balance.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Which balance is entered in the CREDIT column of a trial balance?"
options:
  - "Inventory"
  - "Income received in advance"
  - "Prepaid insurance"
  - "Cost of sales"
answer: 1
marks: 1
misconception: credit-balance-identification
worked: |
  Income received in advance is money received for a service not yet given - the business owes that service, so it is a current LIABILITY with a credit balance.
  Prepaid insurance is a current asset (Dr), cost of sales is an expense (Dr) and inventory is a current asset (Dr).
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "In which book of prime entry does a business record a credit note it has RECEIVED from a supplier?"
options:
  - "Purchases journal"
  - "General journal"
  - "Purchases returns journal"
  - "Sales returns journal"
answer: 2
marks: 1
misconception: credit-note-received-book
worked: |
  A supplier sends a credit note when the business returns goods to that supplier.
  Goods going back to a supplier are purchases returns, so the credit note received is entered in the purchases returns journal.
  A credit note ISSUED by the business to its own customer would go in the sales returns journal.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "In which book of prime entry is the purchase of a delivery van on credit FIRST recorded?"
options:
  - "Purchases journal"
  - "Cash payments journal"
  - "Sales journal"
  - "General journal"
answer: 3
marks: 1
misconception: non-current-asset-in-purchases-journal
worked: |
  The purchases journal is only for goods bought for RESALE on credit.
  A delivery van is a non-current asset, not inventory, and nothing has been paid yet, so it is not a cash payment.
  Credit purchases of non-current assets are recorded in the general journal, with a narrative.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "What is the purpose of the narrative written under a general journal entry?"
options:
  - "It explains the reason for the entry"
  - "It shows the balance carried down"
  - "It proves that the trial balance agrees"
  - "It calculates the profit for the year"
answer: 0
marks: 1
misconception: journal-narrative-purpose
worked: |
  A narrative is a short explanation placed under the double entry in the general journal.
  It tells anyone reading the ledger WHY the entry was made, and is often supported by a reference to the source document.
  It has no effect on the amounts and does not balance anything.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "Why does a sole proprietor prepare a trial balance?"
options:
  - "To record all credit transactions of the year"
  - "To check the arithmetical accuracy of the double entry"
  - "To calculate the profit for the year"
  - "To list only the assets and liabilities of the business"
answer: 1
marks: 1
misconception: trial-balance-purpose
worked: |
  A trial balance lists every ledger balance and totals the debit and credit columns.
  If the two totals agree, the double entry is arithmetically accurate and it is a useful starting point for the financial statements.
  It does not prove the books are free of every error - errors of omission, commission, principle, original entry, complete reversal and compensating errors leave the totals in agreement.
```

```yaml
type: mcq
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "In a running-balance ledger, the Cash at Bank account ends the month with a balance shown as $340 Cr. What does this mean?"
options:
  - "The business owes a supplier $340"
  - "An error of $340 has been made in the ledger"
  - "The bank account is overdrawn by $340"
  - "The business has $340 in the bank"
answer: 2
marks: 1
misconception: cr-balance-on-bank
worked: |
  Cash at Bank is an asset, so a positive bank balance is a Dr balance.
  A Cr balance means more has been paid out than paid in - the account is overdrawn by $340.
  A bank overdraft is reported as a current liability in the Statement of Financial Position.
```

```yaml
type: short
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "The running-balance ledger of the trade payable Kestrel Wholesale shows: 1 April balance $1,300 Cr; credit purchases $2,450; payment made $1,800; goods returned to Kestrel $250. Calculate the balance on 30 April. State the amount and the Dr/Cr suffix."
accepted: ["1700 Cr", "$1700 Cr", "1,700 Cr", "$1,700 Cr", "1700 credit", "$1,700 credit", "1700Cr"]
marks: 1
misconception: payable-balance-direction
worked: |
  A trade payable is a liability, so it normally has a Cr balance.
  1,300 Cr + 2,450 (credit purchases, Cr) = 3,750 Cr.
  3,750 Cr - 1,800 (payment, Dr) = 1,950 Cr.
  1,950 Cr - 250 (goods returned, Dr) = $1,700 Cr.
```

```yaml
type: short
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
stem: "In the trial balance of Pelican Traders the debit column totals $76,480. All credit balances except capital total $31,900. Calculate the capital."
accepted: ["44580", "$44580", "44,580", "$44,580"]
marks: 1
misconception: missing-figure-in-trial-balance
worked: |
  The trial balance must agree, so the credit column must also total $76,480.
  Capital = total credits - other credit balances = 76,480 - 31,900 = $44,580.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Harbourline Bakery buys a mixing machine for $18,000. It has an estimated residual value of $3,000 and a useful life of 5 years. Depreciation is on the straight-line method. What is the depreciation charge for one year?"
options:
  - "$3,600"
  - "$4,200"
  - "$2,400"
  - "$3,000"
answer: 3
marks: 1
misconception: residual-value-ignored
worked: |
  Straight-line depreciation = (cost - residual value) / useful life.
  = (18,000 - 3,000) / 5
  = 15,000 / 5
  = $3,000 each year.
  Dividing the cost of $18,000 by 5 (giving $3,600) forgets the residual value.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Harbourline Bakery buys a van for $24,000 on 1 January 2025. Depreciation is 20% per annum on cost, charged for a full year in the year of purchase. What is the carrying amount of the van at 31 December 2026?"
options:
  - "$14,400"
  - "$15,360"
  - "$19,200"
  - "$9,600"
answer: 0
marks: 1
misconception: reducing-balance-used-for-straight-line
worked: |
  Straight-line: 20% of COST every year = 0.20 x 24,000 = $4,800 a year.
  Two years of depreciation = 2 x 4,800 = $9,600 accumulated depreciation.
  Carrying amount = 24,000 - 9,600 = $14,400.
  $15,360 comes from wrongly using the reducing-balance method.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Clearview Optics buys equipment for $20,000. Depreciation is 25% per annum on the reducing-balance method. What is the depreciation charge in the SECOND year?"
options:
  - "$8,750"
  - "$3,750"
  - "$5,000"
  - "$1,250"
answer: 1
marks: 1
misconception: reducing-balance-on-cost
worked: |
  Year 1: 0.25 x 20,000 = $5,000. Carrying amount at end of year 1 = 20,000 - 5,000 = $15,000.
  Year 2: 0.25 x 15,000 = $3,750.
  Reducing balance charges the percentage on the CARRYING AMOUNT, not on cost, so year 2 is lower than year 1.
  $8,750 is the accumulated depreciation after two years (5,000 + 3,750), not the year-2 charge.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Clearview Optics buys a machine for $40,000. Depreciation is 30% per annum on the reducing-balance method, with a full year charged in the year of purchase. What is the depreciation charge in the second year?"
options:
  - "$20,400"
  - "$5,880"
  - "$8,400"
  - "$12,000"
answer: 2
marks: 1
misconception: reducing-balance-year-two
worked: |
  Year 1: 0.30 x 40,000 = $12,000. Carrying amount = 40,000 - 12,000 = $28,000.
  Year 2: 0.30 x 28,000 = $8,400.
  $20,400 is the two-year total (12,000 + 8,400) and $5,880 would be the year-3 charge.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Tamarind Print buys a printing machine. The costs are: purchase price $15,000; delivery to the workshop $600; installation $900; one year's insurance on the machine $400; training the operator $500. What amount is recorded as the cost of the non-current asset?"
options:
  - "$15,000"
  - "$16,900"
  - "$17,400"
  - "$16,500"
answer: 3
marks: 1
misconception: capitalising-revenue-expenditure
worked: |
  The cost of a non-current asset = purchase price + all costs needed to bring it to its working location and condition.
  Capital expenditure: purchase price 15,000 + delivery 600 + installation 900 = $16,500.
  Insurance ($400) and operator training ($500) are running costs of the period - revenue expenditure charged as an expense.
  $17,400 wrongly capitalises all five items.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Which of the following is REVENUE expenditure?"
options:
  - "Repainting the shop front in the company colours"
  - "Legal fees paid on the purchase of a shop building"
  - "Cost of installing a new air-conditioning system in a newly bought office"
  - "Delivery cost of a newly purchased machine"
answer: 0
marks: 1
misconception: capital-vs-revenue-classification
worked: |
  Revenue expenditure is spending on the day-to-day running of the business, or on maintaining an asset in its existing condition - it is charged as an expense.
  Repainting maintains the shop, so it is revenue expenditure.
  Legal fees on a purchase, installation of a new system and delivery of a new machine are all costs of getting an asset ready for use, so they are capitalised.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Which of the following is CAPITAL expenditure?"
options:
  - "Wages of the machine operator"
  - "Legal fees paid when buying a shop building"
  - "Annual road tax for the delivery van"
  - "Repair of a broken office window"
answer: 1
marks: 1
misconception: revenue-treated-as-capital
worked: |
  Capital expenditure is spending to acquire a non-current asset or to bring it into use - it increases the carrying amount of the asset.
  Legal fees on the purchase of a building are part of the cost of the building.
  Road tax, repairs and operator wages are all recurring running costs - revenue expenditure.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Bluefin Movers sells a van that cost $24,000 and has accumulated depreciation of $15,000. The van is sold for $7,500 cash. What is the result of the disposal?"
options:
  - "Loss on disposal of $16,500"
  - "Gain on disposal of $7,500"
  - "Loss on disposal of $1,500"
  - "Gain on disposal of $1,500"
answer: 2
marks: 1
misconception: disposal-uses-cost-not-carrying-amount
worked: |
  Carrying amount = cost - accumulated depreciation = 24,000 - 15,000 = $9,000.
  Proceeds = $7,500.
  Proceeds ($7,500) are LESS than the carrying amount ($9,000), so there is a loss of 9,000 - 7,500 = $1,500.
  Comparing proceeds with cost instead of carrying amount gives the wrong figure of $16,500.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Bluefin Movers sells a machine that cost $12,000 and has accumulated depreciation of $9,600. The machine is sold for $3,200. What is the result of the disposal?"
options:
  - "Loss on disposal of $800"
  - "Gain on disposal of $3,200"
  - "Loss on disposal of $2,400"
  - "Gain on disposal of $800"
answer: 3
marks: 1
misconception: disposal-gain-or-loss-direction
worked: |
  Carrying amount = 12,000 - 9,600 = $2,400.
  Proceeds = $3,200.
  Proceeds exceed the carrying amount, so there is a gain of 3,200 - 2,400 = $800.
  A gain on disposal is shown as OTHER INCOME in the Statement of Financial Performance.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Which entry transfers the accumulated depreciation of a disposed machine to the disposal account?"
options:
  - "Dr Accumulated depreciation - machinery; Cr Disposal of machinery"
  - "Dr Disposal of machinery; Cr Accumulated depreciation - machinery"
  - "Dr Machinery; Cr Disposal of machinery"
  - "Dr Disposal of machinery; Cr Depreciation expense"
answer: 0
marks: 1
misconception: disposal-account-entries
worked: |
  The accumulated depreciation account carries a CREDIT balance, so it is closed by DEBITING it.
  The matching credit goes to the disposal account, where it reduces the carrying amount being written off.
  The full sequence is: Dr Disposal / Cr Machinery (at cost); Dr Accumulated depreciation / Cr Disposal; Dr Cash at bank / Cr Disposal (proceeds); the balance is the gain or loss.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Sunniva Crafts uses perpetual inventory and FIFO. March transactions for one product: 1 Mar opening 20 units at $12; 5 Mar bought 30 units at $14; 12 Mar sold 35 units; 20 Mar bought 25 units at $15; 28 Mar sold 20 units. What is the value of the closing inventory at 31 March?"
options:
  - "$375"
  - "$300"
  - "$280"
  - "$285"
answer: 1
marks: 1
misconception: fifo-closing-inventory
worked: |
  12 Mar sale of 35 units (FIFO, earliest cost first): 20 at $12 and 15 at $14. Left: 15 units at $14.
  20 Mar purchase: inventory is now 15 at $14 and 25 at $15.
  28 Mar sale of 20 units: 15 at $14 and 5 at $15. Left: 20 units at $15.
  Closing inventory = 20 x $15 = $300.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Using the same March records of Sunniva Crafts (opening 20 units at $12; bought 30 at $14; sold 35; bought 25 at $15; sold 20), what is the total cost of sales for March under FIFO?"
options:
  - "$285"
  - "$780"
  - "$735"
  - "$450"
answer: 2
marks: 1
misconception: fifo-cost-of-sales
worked: |
  12 Mar sale: (20 x 12) + (15 x 14) = 240 + 210 = $450.
  28 Mar sale: (15 x 14) + (5 x 15) = 210 + 75 = $285.
  Total cost of sales = 450 + 285 = $735.
  Check: opening 240 + purchases (420 + 375) = 1,035; less closing inventory 300 = $735.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Marigold Gifts uses FIFO. Opening inventory is 10 units at $8 each. It then buys 40 units at $9 each and later sells 25 units. What is the cost of sales for that sale?"
options:
  - "$225"
  - "$200"
  - "$235"
  - "$215"
answer: 3
marks: 1
misconception: fifo-oldest-cost-first
worked: |
  FIFO assumes the earliest costs leave first.
  The 25 units sold are made up of the 10 opening units at $8 and 15 of the new units at $9.
  Cost of sales = (10 x 8) + (15 x 9) = 80 + 135 = $215.
  Costing all 25 units at $9 gives the wrong answer of $225.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "At the year end the inventory of Marigold Gifts cost $4,800 but its net realisable value is only $4,150. What is the impairment loss on inventory?"
options:
  - "$650"
  - "$4,150"
  - "$4,800"
  - "$8,950"
answer: 0
marks: 1
misconception: inventory-lower-of-cost-and-nrv
worked: |
  Inventory is valued at the LOWER of cost and net realisable value.
  NRV ($4,150) is lower than cost ($4,800), so inventory is written down to $4,150.
  Impairment loss on inventory = 4,800 - 4,150 = $650, charged as an expense.
  This applies the prudence theory - assets and profit must not be overstated.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Marigold Gifts holds 40 damaged units that cost $60 each. They can be sold for $50 each, but only after repairs costing $8 each. At what value are these 40 units shown in the Statement of Financial Position?"
options:
  - "$1,320"
  - "$1,680"
  - "$2,000"
  - "$2,400"
answer: 1
marks: 1
misconception: nrv-repair-cost-ignored
worked: |
  Net realisable value per unit = selling price - costs to make the sale = 50 - 8 = $42.
  NRV ($42) is lower than cost ($60), so the units are valued at NRV.
  Value = 40 x $42 = $1,680.
  $2,000 uses the selling price without deducting the repair cost; $2,400 wrongly keeps them at cost.
```

```yaml
type: mcq
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "The closing inventory of Sunniva Crafts has been OVERSTATED by $900. What is the effect on the financial statements for that year?"
options:
  - "Cost of sales is overstated by $900"
  - "There is no effect on the profit for the year"
  - "Profit for the year is overstated by $900"
  - "Profit for the year is understated by $900"
answer: 2
marks: 1
misconception: inventory-error-profit-direction
worked: |
  A higher closing inventory means a LOWER cost of sales.
  Lower cost of sales means a higher gross profit and therefore a higher profit for the year.
  So overstating closing inventory by $900 overstates profit by $900 (and overstates inventory and equity in the Statement of Financial Position by $900).
```

```yaml
type: short
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Office fittings cost $30,000. Depreciation is 20% per annum on the reducing-balance method, with a full year charged in the year of purchase. Calculate the depreciation charge for the SECOND year."
accepted: ["4800", "$4800", "4,800", "$4,800"]
marks: 1
misconception: reducing-balance-second-year
worked: |
  Year 1: 0.20 x 30,000 = $6,000. Carrying amount = 30,000 - 6,000 = $24,000.
  Year 2: 0.20 x 24,000 = $4,800.
```

```yaml
type: short
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Larkfield Sports uses perpetual inventory and FIFO. July records for one product: 1 Jul opening 12 units at $25; 6 Jul bought 18 units at $28; 14 Jul sold 20 units; 22 Jul bought 10 units at $30. Calculate the value of the closing inventory at 31 July."
accepted: ["580", "$580"]
marks: 1
misconception: fifo-layers
worked: |
  After 6 Jul: 12 at $25 and 18 at $28.
  14 Jul sale of 20 units (FIFO): 12 at $25 and 8 at $28. Remaining: 10 at $28.
  22 Jul purchase: 10 at $28 and 10 at $30.
  Closing inventory = (10 x 28) + (10 x 30) = 280 + 300 = $580.
```

```yaml
type: short
topic: "G7 Inventory, Non-Current Assets & Depreciation"
stem: "Inventory of one product cost $2,600. Its net realisable value at the year end is $2,240. Calculate the impairment loss on inventory."
accepted: ["360", "$360"]
marks: 1
misconception: impairment-loss-on-inventory
worked: |
  NRV ($2,240) is below cost ($2,600), so the inventory is written down to NRV.
  Impairment loss on inventory = 2,600 - 2,240 = $360.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "For the year ended 31 December, Larkspur Trading records sales revenue $86,000, sales returns $2,400 and cost of sales $51,600. What is the gross profit?"
options:
  - "$34,400"
  - "$29,600"
  - "$36,800"
  - "$32,000"
answer: 3
marks: 1
misconception: sales-returns-added-not-deducted
worked: |
  Net sales revenue = sales revenue - sales returns = 86,000 - 2,400 = $83,600.
  Gross profit = net sales revenue - cost of sales = 83,600 - 51,600 = $32,000.
  $34,400 forgets to deduct the sales returns.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Larkspur Trading has a gross profit of $32,000, commission income of $1,500 and other expenses of $21,300. What is the profit for the year?"
options:
  - "$12,200"
  - "$10,700"
  - "$9,200"
  - "$54,800"
answer: 0
marks: 1
misconception: other-income-omitted
worked: |
  Profit for the year = gross profit + other income - other expenses.
  = 32,000 + 1,500 - 21,300
  = 33,500 - 21,300
  = $12,200.
  $10,700 leaves out the commission income; $9,200 wrongly subtracts it.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Which item is shown under OTHER INCOME in the Statement of Financial Performance?"
options:
  - "Impairment loss on trade receivables"
  - "Discount received"
  - "Discount allowed"
  - "Carriage outwards"
answer: 1
marks: 1
misconception: discount-received-vs-allowed
worked: |
  Discount received is a cash discount the business RECEIVES from a supplier for paying early - it is income.
  Discount allowed (given to customers), carriage outwards (delivery to customers) and the impairment loss on trade receivables are all OTHER EXPENSES.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Under a perpetual inventory system, how is carriage inwards on goods bought for resale treated?"
options:
  - "It is shown as other income"
  - "It is deducted from sales revenue"
  - "It is added to the cost of the inventory"
  - "It is shown as an other expense"
answer: 2
marks: 1
misconception: carriage-inwards-as-expense
worked: |
  Carriage inwards is a cost of bringing purchased goods into the business, so it forms part of the cost of those goods.
  Under perpetual inventory it is debited to the Inventory account, and so it reaches the Statement of Financial Performance through cost of sales when the goods are sold.
  Carriage OUTWARDS, the cost of delivering goods to customers, is a separate other expense.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "How is carriage outwards shown in the financial statements of a sole trader?"
options:
  - "As part of cost of sales"
  - "As a current asset in the Statement of Financial Position"
  - "As a deduction from sales revenue"
  - "As an other expense in the Statement of Financial Performance"
answer: 3
marks: 1
misconception: carriage-outwards-in-cost-of-sales
worked: |
  Carriage outwards is the cost of delivering goods to customers - a selling and distribution cost of the period.
  It is listed with the other expenses and reduces the profit for the year, but it never touches gross profit.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "How does the Statement of Financial Performance of a SERVICE business differ from that of a trading business?"
options:
  - "It shows service fee revenue and has no cost of sales or gross profit"
  - "It shows cost of sales but no other expenses"
  - "It shows drawings as an expense"
  - "It shows no revenue at all"
answer: 0
marks: 1
misconception: service-business-format
worked: |
  A service business does not buy and sell goods, so it holds no inventory for resale.
  With no goods sold there is no cost of sales and therefore no gross profit line.
  The format is: service fee revenue + other income - other expenses = profit for the year.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "At 31 December, Larkspur Trading has: inventory $9,300; trade receivables $8,400 (before an allowance for impairment of $420); prepaid insurance $300; cash at bank $2,150. What are the total current assets?"
options:
  - "$19,430"
  - "$19,730"
  - "$20,150"
  - "$17,580"
answer: 1
marks: 1
misconception: gross-receivables-in-sofp
worked: |
  Trade receivables are shown NET of the allowance: 8,400 - 420 = $7,980.
  Total current assets = inventory 9,300 + trade receivables 7,980 + prepaid insurance 300 + cash at bank 2,150
  = $19,730.
  $20,150 wrongly uses the gross receivables of $8,400.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "At 31 December, Larkspur Trading has premises $90,000, equipment at cost $26,000 and accumulated depreciation on equipment $9,500. What are the total non-current assets shown in the Statement of Financial Position?"
options:
  - "$125,500"
  - "$80,500"
  - "$106,500"
  - "$116,000"
answer: 2
marks: 1
misconception: accumulated-depreciation-not-deducted
worked: |
  Equipment is shown at its carrying amount: 26,000 - 9,500 = $16,500.
  Total non-current assets = premises 90,000 + equipment 16,500 = $106,500.
  $116,000 forgets the accumulated depreciation; $125,500 wrongly ADDS it.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Larkspur Trading had capital of $100,000 on 1 January. The profit for the year was $12,200 and the owner's drawings were $6,000. No extra capital was brought in. What is the capital at 31 December?"
options:
  - "$118,200"
  - "$93,800"
  - "$100,000"
  - "$106,200"
answer: 3
marks: 1
misconception: drawings-added-to-capital
worked: |
  Closing capital = opening capital + profit for the year - drawings.
  = 100,000 + 12,200 - 6,000
  = $106,200.
  $118,200 wrongly ADDS the drawings; $93,800 wrongly ignores the profit.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "At 31 December, Larkspur Trading owes: trade payables $6,530; accrued wages $1,500; a bank loan of $12,000 which is not repayable for four years. What are the total liabilities?"
options:
  - "$20,030"
  - "$8,030"
  - "$18,530"
  - "$32,030"
answer: 0
marks: 1
misconception: non-current-liability-omitted
worked: |
  Current liabilities = trade payables 6,530 + accrued wages 1,500 = $8,030.
  Non-current liabilities = bank loan $12,000.
  Total liabilities = 8,030 + 12,000 = $20,030.
  $8,030 counts only the current liabilities.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Larkspur Trading has non-current assets of $106,500 and current assets of $19,730. Its capital is $106,200 and total liabilities are $20,030. What are the TOTAL ASSETS, and does the Statement of Financial Position balance?"
options:
  - "$120,230 - no, it does not balance"
  - "$126,230 - yes, it balances"
  - "$126,230 - no, it does not balance"
  - "$106,500 - yes, it balances"
answer: 1
marks: 1
misconception: accounting-equation-check
worked: |
  Total assets = 106,500 + 19,730 = $126,230.
  Equity + liabilities = 106,200 + 20,030 = $126,230.
  The two sides are equal, so the Statement of Financial Position balances - assets = liabilities + equity.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Where is the profit for the year shown in the Statement of Financial Position of a sole proprietor?"
options:
  - "Deducted from capital in the equity section"
  - "Listed as a non-current liability"
  - "Added to capital in the equity section"
  - "Listed as a current asset"
answer: 2
marks: 1
misconception: profit-not-transferred-to-capital
worked: |
  The profit for the year belongs to the owner, so it increases the amount the business owes the owner.
  Equity = opening capital + additional capital + profit for the year - drawings.
  A profit is added to capital; a loss would be deducted.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Cedarwood Repairs made a LOSS for the year of $4,300. How is this shown in the equity section?"
options:
  - "It is added to capital"
  - "It is shown as a current liability"
  - "It is shown as an other expense"
  - "It is deducted from capital"
answer: 3
marks: 1
misconception: loss-transferred-to-capital
worked: |
  A loss reduces what the business owes the owner, so it is DEDUCTED from capital.
  Equity = opening capital + additional capital - loss for the year - drawings.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "In the Statement of Financial Performance of a trading business, which line comes immediately AFTER gross profit?"
options:
  - "Other income"
  - "Cost of sales"
  - "Net sales revenue"
  - "Drawings"
answer: 0
marks: 1
misconception: income-statement-line-order
worked: |
  The order is: net sales revenue; less cost of sales; = gross profit; add other income; less other expenses; = profit for the year.
  Net sales revenue and cost of sales come BEFORE gross profit. Drawings never appear in the Statement of Financial Performance - they belong in the equity section.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "How is accumulated depreciation presented in the Statement of Financial Position?"
options:
  - "Shown as an other expense"
  - "Deducted from the cost of the non-current asset"
  - "Added to the cost of the non-current asset"
  - "Shown as a current liability"
answer: 1
marks: 1
misconception: accumulated-depreciation-placement
worked: |
  Accumulated depreciation is the total depreciation charged on an asset to date.
  It is deducted from the cost of that asset to give the carrying amount shown in the Statement of Financial Position.
  The depreciation EXPENSE for the year (a different figure) goes in the Statement of Financial Performance.
```

```yaml
type: mcq
topic: "G10 Financial Statements (Performance + Position)"
stem: "Which item does NOT appear anywhere in the Statement of Financial Position?"
options:
  - "Trade payables"
  - "Drawings"
  - "Sales revenue"
  - "Inventory"
answer: 2
marks: 1
misconception: revenue-in-statement-of-position
worked: |
  Sales revenue is an INCOME element and is reported only in the Statement of Financial Performance.
  Inventory is a current asset, trade payables a current liability, and drawings are deducted within the equity section - all three appear in the Statement of Financial Position.
```

```yaml
type: short
topic: "G10 Financial Statements (Performance + Position)"
stem: "Kestrel Books reports net sales revenue $74,500; cost of sales $45,200; other income $900; other expenses $19,600. Calculate the profit for the year."
accepted: ["10600", "$10600", "10,600", "$10,600"]
marks: 1
misconception: profit-for-the-year-build
worked: |
  Gross profit = 74,500 - 45,200 = $29,300.
  Add other income: 29,300 + 900 = $30,200.
  Less other expenses: 30,200 - 19,600 = $10,600 profit for the year.
```

```yaml
type: short
topic: "G10 Financial Statements (Performance + Position)"
stem: "At the year end a sole trader has: trade payables $5,240; accrued electricity $310; income received in advance $450; a bank loan of $15,000 of which $3,000 is repayable within the next 12 months. Calculate the total current liabilities."
accepted: ["9000", "$9000", "9,000", "$9,000"]
marks: 1
misconception: current-portion-of-borrowings
worked: |
  Current liabilities are amounts due within 12 months.
  Trade payables 5,240 + accrued electricity 310 + income received in advance 450 + current portion of the bank loan 3,000
  = $9,000.
  The remaining $12,000 of the loan is a non-current liability.
```

```yaml
type: short
topic: "G10 Financial Statements (Performance + Position)"
stem: "Wren Hardware records sales revenue $62,000, sales returns $1,800 and cost of sales $37,400. Calculate the gross profit."
accepted: ["22800", "$22800", "22,800", "$22,800"]
marks: 1
misconception: net-sales-revenue
worked: |
  Net sales revenue = 62,000 - 1,800 = $60,200.
  Gross profit = 60,200 - 37,400 = $22,800.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "At 31 December, Oakhill Supplies has trade receivables of $40,000. The allowance for impairment of trade receivables is to be 2% of trade receivables. The existing allowance is $500. What amount is charged as an expense for the year?"
options:
  - "$800"
  - "$500"
  - "$1,300"
  - "$300"
answer: 3
marks: 1
misconception: allowance-charged-in-full
worked: |
  Required allowance = 2% x 40,000 = $800.
  The existing allowance is already $500, so only the INCREASE is charged.
  Increase = 800 - 500 = $300 (Dr Impairment loss on trade receivables $300; Cr Allowance for impairment $300).
  Charging the whole $800 double-counts the allowance already in the books.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "The existing allowance for impairment of trade receivables is $900. At the year end only $620 is required. What is the effect on the Statement of Financial Performance?"
options:
  - "Other expenses are reduced by $280"
  - "Other expenses are increased by $280"
  - "Other income increases by $620"
  - "No entry is needed"
answer: 0
marks: 1
misconception: allowance-decrease-sign
worked: |
  The allowance must fall from $900 to $620, a DECREASE of $280.
  A decrease is written back: Dr Allowance for impairment $280; Cr Impairment loss on trade receivables $280.
  The credit reduces the expense, so other expenses fall by $280 and the profit for the year rises by $280.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "Oakhill Supplies decides that $260 owed by K. Lim can no longer be recovered and writes it off. Which entry is correct?"
options:
  - "Dr Sales revenue $260; Cr Trade receivable - K. Lim $260"
  - "Dr Impairment loss on trade receivables $260; Cr Trade receivable - K. Lim $260"
  - "Dr Trade receivable - K. Lim $260; Cr Impairment loss on trade receivables $260"
  - "Dr Allowance for impairment $260; Cr Sales revenue $260"
answer: 1
marks: 1
misconception: write-off-vs-allowance
worked: |
  Writing off means the specific customer's account is removed, so Cr Trade receivable - K. Lim $260.
  The loss is an expense of the period: Dr Impairment loss on trade receivables $260.
  The write-off is a real, identified loss; the ALLOWANCE is a separate estimate for debts that may not be collected.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "A cheque for $480 received from D. Chua has been dishonoured by the bank. Which entry records this?"
options:
  - "Dr Impairment loss on trade receivables $480; Cr Cash at bank $480"
  - "Dr Cash at bank $480; Cr Sales revenue $480"
  - "Dr Trade receivable - D. Chua $480; Cr Cash at bank $480"
  - "Dr Cash at bank $480; Cr Trade receivable - D. Chua $480"
answer: 2
marks: 1
misconception: dishonoured-cheque-direction
worked: |
  The cheque did not clear, so the money never reached the bank: Cr Cash at bank $480.
  The customer still owes the money, so the debt is reinstated: Dr Trade receivable - D. Chua $480.
  This is the exact reverse of the entry made when the cheque was first received.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "A sole trader has trade receivables of $24,600 and an allowance for impairment equal to 3% of trade receivables. What figure is shown for trade receivables in the Statement of Financial Position?"
options:
  - "$24,600"
  - "$25,338"
  - "$738"
  - "$23,862"
answer: 3
marks: 1
misconception: net-trade-receivables
worked: |
  Allowance = 3% x 24,600 = $738.
  Trade receivables in the Statement of Financial Position are shown NET: 24,600 - 738 = $23,862.
  $25,338 wrongly adds the allowance instead of deducting it.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "How is a TRADE discount treated in the books of account?"
options:
  - "It is deducted before the invoice is recorded, so it never appears in the ledger"
  - "It is recorded as an other expense by the seller"
  - "It is recorded as other income by the buyer"
  - "It is recorded only when the customer pays early"
answer: 0
marks: 1
misconception: trade-discount-recorded
worked: |
  A trade discount is a reduction in the LIST price given to encourage bulk buying.
  The invoice is drawn up at the net amount (list price less trade discount), and only that net amount is entered in the books.
  A CASH discount, by contrast, is given for prompt payment and IS recorded - as discount allowed (an expense) or discount received (other income).
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "Oakhill Supplies sells goods with a list price of $2,000 to a customer, allowing a trade discount of 10%. The customer pays within the credit period and earns a cash discount of 5%. What amount is recorded as discount allowed?"
options:
  - "$290"
  - "$90"
  - "$100"
  - "$200"
answer: 1
marks: 1
misconception: cash-discount-on-list-price
worked: |
  Invoice value = list price less trade discount = 2,000 - (10% x 2,000) = $1,800. Only $1,800 enters the books.
  Cash discount = 5% x 1,800 = $90 - this is the discount allowed (an other expense).
  Cash received = 1,800 - 90 = $1,710.
  $100 wrongly takes 5% of the list price of $2,000.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "How is discount allowed shown in the financial statements?"
options:
  - "As a current asset in the Statement of Financial Position"
  - "As a deduction from sales revenue"
  - "As an other expense in the Statement of Financial Performance"
  - "As other income in the Statement of Financial Performance"
answer: 2
marks: 1
misconception: discount-allowed-classification
worked: |
  Discount allowed is the cash discount a business GIVES to its credit customers for prompt payment.
  It is a cost of collecting money early, so it is listed with the other expenses.
  Discount RECEIVED from suppliers is other income.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "A debt of $420 owed by R. Tan was written off last year. R. Tan now offers to pay in full. Which entry REINSTATES the debt?"
options:
  - "Dr Cash at bank $420; Cr Trade receivable - R. Tan $420"
  - "Dr Impairment loss on trade receivables $420; Cr Trade receivable - R. Tan $420"
  - "Dr Allowance for impairment $420; Cr Cash at bank $420"
  - "Dr Trade receivable - R. Tan $420; Cr Impairment loss on trade receivables recovered $420"
answer: 3
marks: 1
misconception: recovery-of-written-off-debt
worked: |
  Two steps are needed. First reinstate the debt that was written off: Dr Trade receivable - R. Tan $420; Cr Impairment loss on trade receivables recovered $420 (other income).
  Then record the money when it arrives: Dr Cash at bank $420; Cr Trade receivable - R. Tan $420.
  The question asks only for the reinstatement, which is the first entry.
```

```yaml
type: mcq
topic: "G8 Trade Receivables & Impairment"
stem: "What type of balance does the Allowance for Impairment of Trade Receivables account have in the ledger?"
options:
  - "A credit balance, because it is deducted from trade receivables"
  - "A debit balance, because it is an expense"
  - "A debit balance, because it is an asset"
  - "No balance, because it is closed to capital each year"
answer: 0
marks: 1
misconception: allowance-balance-side
worked: |
  The allowance is a contra-asset: it sits against trade receivables and reduces them.
  Because it reduces an asset, it carries a CREDIT balance and appears in the credit column of the trial balance.
  It is carried forward from year to year - only the CHANGE in the allowance is charged (or written back) each year.
```

```yaml
type: short
topic: "G8 Trade Receivables & Impairment"
stem: "A business has trade receivables of $52,000 at the year end. The allowance for impairment is to be 2.5% of trade receivables. The existing allowance is $900. Calculate the amount charged to the Statement of Financial Performance for the year."
accepted: ["400", "$400"]
marks: 1
misconception: increase-in-allowance
worked: |
  Required allowance = 2.5% x 52,000 = $1,300.
  Existing allowance = $900.
  Increase charged as an expense = 1,300 - 900 = $400.
```

```yaml
type: short
topic: "G8 Trade Receivables & Impairment"
stem: "A sole trader has trade receivables of $31,500 and an allowance for impairment of 4% of trade receivables. Calculate the amount shown for trade receivables in the Statement of Financial Position."
accepted: ["30240", "$30240", "30,240", "$30,240"]
marks: 1
misconception: gross-instead-of-net-receivables
worked: |
  Allowance = 4% x 31,500 = $1,260.
  Trade receivables (net) = 31,500 - 1,260 = $30,240.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "The cost of repairing a delivery van, $480, was debited to the Motor Vehicles account. What type of error is this?"
options:
  - "Compensating error"
  - "Error of principle"
  - "Error of commission"
  - "Error of omission"
answer: 1
marks: 1
misconception: principle-vs-commission
worked: |
  Revenue expenditure (a repair) has been recorded as capital expenditure (added to a non-current asset).
  Recording an item in a completely WRONG CLASS of account is an error of principle.
  An error of commission would be the right class but the wrong account (for example, the wrong customer's account).
  The debits still equal the credits, so the trial balance still agrees.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "A payment of $260 received from A. Tan was posted to the account of A. Tang, another credit customer. What type of error is this?"
options:
  - "Error of original entry"
  - "Complete reversal of entries"
  - "Error of commission"
  - "Error of principle"
answer: 2
marks: 1
misconception: commission-vs-principle
worked: |
  The entry went into the right CLASS of account (a trade receivable) but into the WRONG account within that class.
  That is an error of commission.
  The total debits still equal the total credits, so the trial balance is not affected.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "A credit sale of $270 was entered in both the sales revenue account and the trade receivable account as $720. What type of error is this?"
options:
  - "Error of commission"
  - "Error of principle"
  - "Error of omission"
  - "Error of original entry"
answer: 3
marks: 1
misconception: original-entry-error
worked: |
  The correct accounts were used and both sides were entered with the SAME wrong amount.
  A wrong figure taken from the source document into the book of prime entry is an error of original entry (sometimes called a transposition error).
  Because both sides carry $720, the trial balance still agrees. The correction is for the difference: 720 - 270 = $450.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "Cash of $350 paid to a supplier was DEBITED to Cash at Bank and CREDITED to the supplier's account. What type of error is this?"
options:
  - "Complete reversal of entries"
  - "Error of omission"
  - "Compensating error"
  - "Error of principle"
answer: 0
marks: 1
misconception: complete-reversal
worked: |
  The correct entry is Dr Trade payable $350; Cr Cash at bank $350.
  Here both accounts are right but the debit and credit have been swapped - a complete reversal of entries.
  To correct it the entry must be reversed TWICE over: Dr Trade payable $700; Cr Cash at bank $700.
  The trial balance still agrees, because a debit and a credit of equal size were still made.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "Repairs to machinery costing $500 were debited to the Machinery account. Ignoring depreciation, what is the effect on the profit for the year before the error is corrected?"
options:
  - "Profit is overstated by $1,000"
  - "Profit is overstated by $500"
  - "Profit is understated by $500"
  - "Profit is unaffected"
answer: 1
marks: 1
misconception: error-effect-on-profit
worked: |
  The repair should have been an EXPENSE of $500 but was capitalised instead.
  An expense of $500 has been left out of the Statement of Financial Performance, so the profit is $500 too high - overstated by $500.
  In the Statement of Financial Position, machinery (and therefore equity) is also overstated by $500.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "An invoice for advertising of $360 was completely left out of the books. What is the effect on the profit for the year?"
options:
  - "Profit is unaffected"
  - "Profit is overstated by $720"
  - "Profit is overstated by $360"
  - "Profit is understated by $360"
answer: 2
marks: 1
misconception: omission-effect-on-profit
worked: |
  This is an error of omission - neither the debit nor the credit was made.
  An expense of $360 is missing, so the total expenses are too low and the profit is $360 too high - overstated by $360.
  The correction is Dr Advertising expense $360; Cr Trade payable $360.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "The updated Cash at Bank ledger of Willow Cafe shows a balance of $3,850 Dr. There are unpresented cheques of $1,240 and deposits not yet credited by the bank of $700. What is the balance shown on the BANK STATEMENT?"
options:
  - "$3,310"
  - "$5,790"
  - "$2,610"
  - "$4,390"
answer: 3
marks: 1
misconception: reconciliation-direction
worked: |
  Start with the updated cash book balance: $3,850.
  Unpresented cheques have not yet left the bank, so the bank still shows that money: ADD $1,240 -> $5,090.
  Deposits not yet credited have not yet reached the bank, so the bank does not show them: SUBTRACT $700 -> $4,390.
  Balance per bank statement = $4,390. Reversing the two adjustments gives the wrong answer of $3,310.
```

```yaml
type: mcq
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "Which item must be entered in the Cash at Bank ledger account BEFORE the bank reconciliation statement is prepared?"
options:
  - "A direct debit for insurance paid by the bank"
  - "A cheque paid to a supplier that has not yet been presented"
  - "A deposit paid in on the last day of the month but not yet credited"
  - "A cheque received on the last day and not yet banked"
answer: 0
marks: 1
misconception: updating-the-cash-book
worked: |
  The cash book must first be updated for items the BANK knows about but the business has not yet recorded - bank charges, interest, direct debits, standing orders, direct credits and dishonoured cheques.
  Unpresented cheques and deposits not yet credited are timing differences that the business has already recorded; they belong in the reconciliation STATEMENT, not in the ledger.
```

```yaml
type: short
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "The bank statement of Willow Cafe shows a favourable balance of $5,600. There are unpresented cheques of $900 and deposits not yet credited of $1,300. Calculate the balance in the updated Cash at Bank ledger account."
accepted: ["6000", "$6000", "6,000", "$6,000"]
marks: 1
misconception: reconciling-from-bank-statement
worked: |
  Start with the bank statement balance: $5,600.
  Unpresented cheques have been recorded by the business but not by the bank: SUBTRACT $900 -> $4,700.
  Deposits not yet credited have been recorded by the business but not by the bank: ADD $1,300 -> $6,000.
  Updated cash book balance = $6,000 Dr.
```

```yaml
type: short
topic: "G11 Correction of Errors & Bank Reconciliation"
stem: "A purchase of goods on credit from B. Rao was left out of the books entirely - no debit and no credit were made. Name this type of error."
accepted: ["Error of omission", "error of omission", "Omission", "omission"]
marks: 1
misconception: naming-the-error-type
worked: |
  Neither side of the double entry was made, so the transaction is completely missing from the books.
  This is an error of omission. Because both the debit and the credit are missing, the trial balance still agrees - it is one of the errors NOT revealed by the trial balance.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Marlowe Bakery paid rent of $13,200 during the year ended 31 December 2025. Of this, $1,200 relates to January 2026. What is the rent expense for the year ended 31 December 2025?"
options:
  - "$1,200"
  - "$12,000"
  - "$13,200"
  - "$14,400"
answer: 1
marks: 1
misconception: prepayment-not-removed
worked: |
  The accrual (matching) theory says only the cost belonging to THIS period is an expense.
  Rent expense = 13,200 - 1,200 = $12,000.
  The $1,200 paid in advance is a PREPAID EXPENSE - a current asset at 31 December 2025.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Marlowe Bakery paid wages of $44,000 during the year. Wages of $1,600 were still owing at the year end. What is the wages expense for the year?"
options:
  - "$44,000"
  - "$1,600"
  - "$45,600"
  - "$42,400"
answer: 2
marks: 1
misconception: accrual-subtracted-not-added
worked: |
  The work has been done, so the cost belongs to this year even though it has not been paid.
  Wages expense = 44,000 + 1,600 = $45,600.
  The $1,600 owing is an ACCRUED EXPENSE (expense payable) - a current liability at the year end.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Insurance prepaid at 1 January was $400. Insurance paid during the year was $3,600. Insurance prepaid at 31 December was $500. What is the insurance expense for the year?"
options:
  - "$3,700"
  - "$3,600"
  - "$4,500"
  - "$3,500"
answer: 3
marks: 1
misconception: opening-and-closing-prepayments
worked: |
  The opening prepayment of $400 was paid last year but is used up THIS year, so it is added.
  The closing prepayment of $500 was paid this year but belongs to next year, so it is deducted.
  Insurance expense = 400 + 3,600 - 500 = $3,500.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Electricity accrued at 1 January was $250. Electricity paid during the year was $2,900. Electricity accrued at 31 December was $380. What is the electricity expense for the year?"
options:
  - "$3,030"
  - "$3,530"
  - "$2,770"
  - "$2,900"
answer: 0
marks: 1
misconception: opening-and-closing-accruals
worked: |
  The opening accrual of $250 belongs to LAST year but was paid this year, so it is deducted.
  The closing accrual of $380 belongs to THIS year but is not yet paid, so it is added.
  Electricity expense = 2,900 - 250 + 380 = $3,030.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Marlowe Bakery sublets part of its shop. Rent income received during the year was $9,600, of which $800 relates to next year. What is the rent income reported for this year?"
options:
  - "$800"
  - "$8,800"
  - "$9,600"
  - "$10,400"
answer: 1
marks: 1
misconception: income-received-in-advance
worked: |
  Only income EARNED in this period is reported.
  Rent income = 9,600 - 800 = $8,800.
  The $800 is income received in advance - the business still owes the use of the space, so it is a current LIABILITY.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "How is income received in advance shown in the Statement of Financial Position?"
options:
  - "As other income"
  - "As a non-current liability"
  - "As a current liability"
  - "As a current asset"
answer: 2
marks: 1
misconception: income-in-advance-classification
worked: |
  Money has been received for a service the business has not yet provided, so the business still owes something.
  It is therefore a current liability, not income of this year.
  Income RECEIVABLE (earned but not yet received) is the opposite - a current asset.
```

```yaml
type: mcq
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "An accrued expense of $700 was left out at the year end. What is the effect on the financial statements?"
options:
  - "Profit is understated by $700 and liabilities are overstated by $700"
  - "Profit is overstated by $700 and assets are overstated by $700"
  - "There is no effect, because no cash has been paid"
  - "Profit is overstated by $700 and liabilities are understated by $700"
answer: 3
marks: 1
misconception: omitted-accrual-effect
worked: |
  The expense for the year is $700 too low, so the profit is $700 too high - overstated.
  The amount still owing has not been recorded, so current liabilities are $700 too low - understated.
  Every year-end adjustment has a DOUBLE effect: one in the Statement of Financial Performance and one in the Statement of Financial Position.
```

```yaml
type: short
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Commission income EARNED by a sole trader for the year is $1,500, but only $1,100 has been received by 31 December. Calculate the income receivable shown as a current asset at 31 December."
accepted: ["400", "$400"]
marks: 1
misconception: income-receivable
worked: |
  Income receivable = income earned - income received = 1,500 - 1,100 = $400.
  The $400 has been earned but not yet received, so it is a current asset at the year end, and the full $1,500 is reported as income.
```

```yaml
type: short
topic: "G6 Income & Expenses and Year-End Adjustments"
stem: "Insurance prepaid at 1 January was $260. Insurance paid during the year was $4,200. Insurance prepaid at 31 December was $310. Calculate the insurance expense for the year."
accepted: ["4150", "$4150", "4,150", "$4,150"]
marks: 1
misconception: prepayment-both-ends
worked: |
  Insurance expense = opening prepayment + cash paid - closing prepayment.
  = 260 + 4,200 - 310
  = $4,150.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "A sole trader had capital of $62,000 at 1 January. During the year she brought in additional capital of $10,000, the business made a profit of $18,400, and she withdrew $9,500. What is the capital at 31 December?"
options:
  - "$80,900"
  - "$99,900"
  - "$70,900"
  - "$62,000"
answer: 0
marks: 1
misconception: drawings-added-instead-of-deducted
worked: |
  Closing capital = opening capital + additional capital + profit - drawings.
  = 62,000 + 10,000 + 18,400 - 9,500
  = 90,400 - 9,500
  = $80,900.
  $99,900 wrongly ADDS the drawings; $70,900 forgets the additional capital.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "A business has a bank loan of $18,000, repayable in equal annual instalments of $3,000. How is the loan shown in the Statement of Financial Position at the year end?"
options:
  - "Non-current liability $3,000 and current liability $15,000"
  - "Non-current liability $15,000 and current liability $3,000"
  - "Non-current liability $18,000"
  - "Current liability $18,000"
answer: 1
marks: 1
misconception: current-portion-of-borrowings
worked: |
  The part of a long-term borrowing that is due within the next 12 months is a CURRENT liability.
  Instalment due within one year = $3,000 -> current liability.
  Remainder = 18,000 - 3,000 = $15,000 -> non-current liability.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "Which of the following is a CURRENT LIABILITY?"
options:
  - "Inventory"
  - "Allowance for impairment of trade receivables"
  - "Bank overdraft"
  - "Prepaid rent"
answer: 2
marks: 1
misconception: classifying-current-liabilities
worked: |
  A bank overdraft is money owed to the bank and repayable on demand, so it is a current liability.
  Prepaid rent and inventory are current assets.
  The allowance for impairment is a contra-asset - it is deducted from trade receivables, not shown as a liability.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "The owner of a shop takes home goods for her family. At what value are these drawings recorded?"
options:
  - "At selling price"
  - "At selling price less a trade discount"
  - "At net realisable value"
  - "At cost"
answer: 3
marks: 1
misconception: drawings-of-goods-valuation
worked: |
  No sale has taken place, so no revenue and no profit may be recognised on goods taken by the owner.
  The goods are removed from inventory at COST: Dr Drawings; Cr Inventory (at cost).
  Recording them at selling price would create a false profit on a transaction with the owner.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "What is the effect of the owner's drawings on the accounting records?"
options:
  - "Equity decreases and assets decrease"
  - "Equity increases and assets decrease"
  - "Equity decreases and liabilities increase"
  - "Equity is unchanged because drawings are an expense"
answer: 0
marks: 1
misconception: drawings-as-an-expense
worked: |
  Drawings are NOT an expense of the business - they are a withdrawal of resources by the owner.
  The asset taken (cash or goods) leaves the business, and the amount the business owes the owner falls.
  So assets decrease and equity decreases, and the accounting equation still balances.
```

```yaml
type: mcq
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "Which of the following INCREASES the equity of a sole proprietorship?"
options:
  - "Repayment of a bank loan"
  - "Profit for the year"
  - "Drawings"
  - "Loss for the year"
answer: 1
marks: 1
misconception: what-changes-equity
worked: |
  Equity = opening capital + additional capital + profit - drawings.
  Profit for the year increases the amount the business owes the owner, so equity rises.
  Drawings and a loss reduce equity; repaying a loan reduces an asset and a liability by the same amount and leaves equity unchanged.
```

```yaml
type: short
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "A sole trader had capital of $74,500 at 1 January. He brought in additional capital of $6,000, the business made a LOSS of $3,200 for the year, and his drawings were $11,300. Calculate the capital at 31 December."
accepted: ["66000", "$66000", "66,000", "$66,000"]
marks: 1
misconception: loss-transferred-to-capital
worked: |
  Closing capital = opening capital + additional capital - loss - drawings.
  = 74,500 + 6,000 - 3,200 - 11,300
  = 80,500 - 14,500
  = $66,000.
```

```yaml
type: short
topic: "G9 Liabilities, Capital, Drawings & Equity"
stem: "A business has a bank loan of $24,000 which is being repaid at $500 per month. Calculate the amount shown as a CURRENT liability in the Statement of Financial Position at the year end."
accepted: ["6000", "$6000", "6,000", "$6,000"]
marks: 1
misconception: current-portion-monthly-instalments
worked: |
  Amount repayable within the next 12 months = 12 x $500 = $6,000 -> current liability.
  The remaining 24,000 - 6,000 = $18,000 is a non-current liability.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "A business has assets of $78,000 and liabilities of $23,500. What is the equity?"
options:
  - "$23,500"
  - "$78,000"
  - "$54,500"
  - "$101,500"
answer: 2
marks: 1
misconception: accounting-equation-rearranged
worked: |
  Assets = Liabilities + Equity, so Equity = Assets - Liabilities.
  = 78,000 - 23,500
  = $54,500.
  $101,500 wrongly ADDS the liabilities to the assets.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "A business buys equipment for $4,000 on credit. What is the effect on the accounting equation?"
options:
  - "Assets increase by $4,000 and equity increases by $4,000"
  - "Assets decrease by $4,000 and liabilities decrease by $4,000"
  - "Assets are unchanged and liabilities increase by $4,000"
  - "Assets increase by $4,000 and liabilities increase by $4,000"
answer: 3
marks: 1
misconception: credit-purchase-effect
worked: |
  The business gains equipment, so assets rise by $4,000.
  Nothing has been paid, so the business now owes the supplier $4,000 - liabilities rise by $4,000.
  Equity is unchanged and the equation still balances: A = L + E.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "A business pays a trade payable $1,700 by cheque. What is the effect on the accounting equation?"
options:
  - "Assets decrease by $1,700 and liabilities decrease by $1,700"
  - "Assets decrease by $1,700 and equity decreases by $1,700"
  - "Assets increase by $1,700 and liabilities decrease by $1,700"
  - "Liabilities decrease by $1,700 and equity increases by $1,700"
answer: 0
marks: 1
misconception: payment-of-payable-effect
worked: |
  Cash at bank (an asset) falls by $1,700.
  The amount owed to the supplier (a liability) falls by $1,700.
  Equity is not touched - this is not an expense, just the settlement of an existing debt.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "The owner withdraws $500 in cash from the business for private use. What is the effect on the accounting equation?"
options:
  - "Equity decreases by $500 and liabilities increase by $500"
  - "Assets decrease by $500 and equity decreases by $500"
  - "Assets decrease by $500 and liabilities decrease by $500"
  - "Assets increase by $500 and equity decreases by $500"
answer: 1
marks: 1
misconception: drawings-effect-on-equation
worked: |
  Cash (an asset) leaves the business, so assets fall by $500.
  Drawings reduce what the business owes the owner, so equity falls by $500.
  By the accounting entity theory, the owner and the business are treated as separate for accounting purposes.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "Which of the following is an INCOME element?"
options:
  - "Drawings"
  - "Carriage outwards"
  - "Commission received"
  - "Trade receivables"
answer: 2
marks: 1
misconception: income-vs-asset-element
worked: |
  The five elements are asset, liability, equity, income and expense.
  Commission received increases equity through profit and is not a contribution from the owner - it is INCOME.
  Trade receivables is an asset, drawings reduce equity, and carriage outwards is an expense.
```

```yaml
type: mcq
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "Which statement describes a sole proprietorship?"
options:
  - "It is owned by several people who share the profits and the losses between them"
  - "It is a separate legal person whose owners are not liable for its debts"
  - "It is owned by the government and does not aim to make a profit"
  - "It is owned by one person, who has unlimited liability for the debts of the business"
answer: 3
marks: 1
misconception: sole-proprietorship-features
worked: |
  A sole proprietorship has ONE owner who provides the capital, keeps all the profit and has unlimited liability - personal assets can be used to settle business debts.
  For ACCOUNTING purposes the business is treated as separate from the owner (the accounting entity theory), even though it is not a separate legal person.
```

```yaml
type: short
topic: "G3 Elements, Accounting Equation & Types of Business"
stem: "A business has assets of $96,400 and liabilities of $38,150. Calculate the equity."
accepted: ["58250", "$58250", "58,250", "$58,250"]
marks: 1
misconception: equity-from-equation
worked: |
  Equity = Assets - Liabilities
  = 96,400 - 38,150
  = $58,250.
```

```yaml
type: mcq
topic: "G4 Source Documents & Internal Controls"
stem: "A customer returns faulty goods. Which source document does the SELLER issue?"
options:
  - "Credit note"
  - "Debit note"
  - "Invoice"
  - "Receipt"
answer: 0
marks: 1
misconception: credit-note-vs-debit-note
worked: |
  The seller must reduce the amount the customer owes, so the seller issues a CREDIT note.
  The credit note is the source document for the sales returns journal in the seller's books, and for the purchases returns journal in the buyer's books.
```

```yaml
type: mcq
topic: "G4 Source Documents & Internal Controls"
stem: "A buyer finds that an invoice has overcharged him and asks the supplier to reduce the amount owed. Which document does the BUYER send?"
options:
  - "Cheque counterfoil"
  - "Debit note"
  - "Credit note"
  - "Statement of account"
answer: 1
marks: 1
misconception: debit-note-issuer
worked: |
  A debit note is sent BY the buyer TO the supplier to request a reduction in the amount owed - for example, for an overcharge or for goods returned.
  The supplier replies by issuing a credit note, and it is the CREDIT note that is the source document for the accounting entry.
```

```yaml
type: mcq
topic: "G4 Source Documents & Internal Controls"
stem: "Which source document is used to record a CREDIT SALE in the sales journal?"
options:
  - "The credit note"
  - "The statement of account"
  - "The sales invoice"
  - "The receipt"
answer: 2
marks: 1
misconception: invoice-vs-receipt
worked: |
  An invoice is issued when goods are sold on credit and shows what is owed.
  A receipt is proof that money has been RECEIVED and is used for cash entries.
  A credit note records returns; a statement of account is only a summary.
```

```yaml
type: mcq
topic: "G4 Source Documents & Internal Controls"
stem: "A supplier sends a statement of account to a credit customer at the end of the month. How is it treated in the customer's books?"
options:
  - "It is recorded in the purchases journal"
  - "It is recorded in the general journal"
  - "It is recorded as a payment in the cash payments journal"
  - "No double entry is made - it is a summary used to check the balance owing"
answer: 3
marks: 1
misconception: statement-of-account-treatment
worked: |
  A statement of account lists the invoices, credit notes and payments for the period and shows the balance owing.
  Every one of those items has already been recorded from its own source document, so entering the statement would double-count them.
  It is used as a CHECK - the customer compares it with the balance in the supplier's ledger account.
```

```yaml
type: mcq
topic: "G4 Source Documents & Internal Controls"
stem: "Which of the following is the best example of an internal control over cash?"
options:
  - "The employee who receives cash is not the same person who records it in the accounts"
  - "All cash received is banked once a year"
  - "The owner keeps blank signed cheques in an unlocked drawer"
  - "Only one employee handles all cash duties from receipt to recording"
answer: 0
marks: 1
misconception: segregation-of-duties
worked: |
  Segregation of duties means the person who HANDLES an asset is not the person who RECORDS it.
  That way, theft cannot easily be hidden by altering the records, so errors and fraud are more likely to be detected.
  The other options all weaken control.
```

```yaml
type: short
topic: "G4 Source Documents & Internal Controls"
stem: "Name the source document a business issues to a customer as proof that cash has been received."
accepted: ["Receipt", "receipt", "Official receipt", "A receipt"]
marks: 1
misconception: receipt-vs-invoice
worked: |
  A receipt is issued when money is received and is proof of payment.
  It is the source document used to record the entry in the cash receipts journal.
  An INVOICE, by contrast, is issued when goods are sold on credit and states the amount owing.
```

```yaml
type: mcq
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "A business creates an allowance for impairment of trade receivables even though no customer has yet refused to pay. Which accounting theory is being applied?"
options:
  - "Materiality"
  - "Prudence"
  - "Consistency"
  - "Going concern"
answer: 1
marks: 1
misconception: prudence-vs-consistency
worked: |
  Prudence requires that assets and income are not overstated and that likely losses are recognised as soon as they are foreseen.
  Some receivables probably will not be collected, so an allowance is created now to avoid overstating trade receivables and profit.
  The same theory explains why inventory is valued at the lower of cost and net realisable value.
```

```yaml
type: mcq
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "A business has used the reducing-balance method to depreciate its machinery for the last five years and continues to do so. Which accounting theory is being applied?"
options:
  - "Historical cost"
  - "Accounting entity"
  - "Consistency"
  - "Prudence"
answer: 2
marks: 1
misconception: consistency-theory
worked: |
  Consistency means using the same accounting method from one period to the next.
  This makes the financial statements of different years comparable - a change in profit reflects a real change in performance, not a change of method.
  A method may be changed only if there is a good reason, and the change must be disclosed.
```

```yaml
type: mcq
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "The owner pays for a family holiday from her personal savings. The payment is NOT recorded in the business books. Which accounting theory is being applied?"
options:
  - "Materiality"
  - "Going concern"
  - "Objectivity"
  - "Accounting entity"
answer: 3
marks: 1
misconception: entity-theory
worked: |
  The accounting entity theory treats the business as separate and distinct from its owner.
  The holiday is the owner's private affair and does not affect the business, so it is not recorded at all.
  (If she had used BUSINESS money for the holiday, it would have been recorded as drawings.)
```

```yaml
type: mcq
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "Rent for December is recorded as an expense of the year even though it will not be paid until January. Which accounting theory is being applied?"
options:
  - "Matching"
  - "Historical cost"
  - "Consistency"
  - "Monetary"
answer: 0
marks: 1
misconception: matching-vs-cash
worked: |
  The matching (accrual) theory requires expenses to be recorded in the period in which they are INCURRED, not the period in which they are paid.
  The premises were used in December, so December's rent belongs to this year's expenses.
  The unpaid amount is recorded as an accrued expense - a current liability.
```

```yaml
type: mcq
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "A shop bought its premises for $200,000 five years ago. The premises are still recorded at $200,000 although similar shops now sell for much more. Which accounting theory is being applied?"
options:
  - "Materiality"
  - "Historical cost"
  - "Prudence"
  - "Going concern"
answer: 1
marks: 1
misconception: historical-cost-theory
worked: |
  The historical cost theory records assets at their original purchase cost.
  Cost is objective and can be verified from a source document, whereas a market value is only an estimate.
  The asset stays at cost (less any accumulated depreciation), whatever the market later does.
```

```yaml
type: short
topic: "G2 Accounting Theories (assumptions & principles)"
stem: "A business buys a stapler for $6 and records it as an expense instead of as a non-current asset. Name the accounting theory that supports this treatment."
accepted: ["Materiality", "materiality", "Materiality theory", "materiality theory", "The materiality theory"]
marks: 1
misconception: materiality-theory
worked: |
  Materiality says that items too small to affect the decisions of users need not be treated in the strict way.
  Capitalising a $6 stapler and depreciating it over several years would cost more effort than the information is worth and would not change any decision.
  So it is written off as an expense at once.
```

```yaml
type: mcq
topic: "G1 Accounting, Accountants, Stakeholders & Ethics"
stem: "A bank is deciding whether to lend money to a sole proprietor. What does the bank most want to learn from the financial statements?"
options:
  - "Which supplier gives the business the largest trade discount"
  - "How many hours the employees work each week"
  - "Whether the business can repay the loan and the interest"
  - "How much the owner takes as drawings each month"
answer: 2
marks: 1
misconception: stakeholder-needs
worked: |
  Each stakeholder has a different need. A bank (a lender) is mainly interested in whether the business can meet the repayments and the interest.
  It looks at the profit for the year, the assets available and the existing borrowings.
  The owner, suppliers, employees and the government each look for something different.
```

```yaml
type: mcq
topic: "G1 Accounting, Accountants, Stakeholders & Ethics"
stem: "An accountant refuses the owner's request to record a sale that has not yet happened, so that the profit will look better. Which ethical value is the accountant showing?"
options:
  - "Confidentiality"
  - "Professional competence"
  - "Professional behaviour"
  - "Integrity"
answer: 3
marks: 1
misconception: ethical-values
worked: |
  Integrity means being honest and straightforward and not being party to information that is false or misleading.
  Recording a sale that has not happened would be false, so refusing shows integrity.
  Confidentiality is about not disclosing information; professional competence is about keeping knowledge and skills up to date.
```

```yaml
type: mcq
topic: "G1 Accounting, Accountants, Stakeholders & Ethics"
stem: "A sole proprietor replaces her handwritten ledgers with accounting software. What is the main benefit?"
options:
  - "Records are updated automatically, so arithmetical errors fall and reports are produced faster"
  - "The software removes the need to keep any source documents"
  - "The software means the trial balance no longer needs to agree"
  - "The software makes the business exempt from keeping accounting records"
answer: 0
marks: 1
misconception: ict-benefits
worked: |
  Accounting software posts the double entry and calculates balances automatically, so arithmetical errors are reduced and reports can be produced at any time.
  Source documents must still be kept as evidence, the double entry still applies, and records must still be maintained.
  The main risks of ICT are data loss, staff training needs and the initial cost.
```

```yaml
type: short
topic: "G1 Accounting, Accountants, Stakeholders & Ethics"
stem: "Name the ethical value shown by an accountant who does not reveal a client's financial information to anyone outside the business without permission."
accepted: ["Confidentiality", "confidentiality", "Confidentiality value"]
marks: 1
misconception: ethical-value-naming
worked: |
  Confidentiality means respecting the privacy of information obtained at work and not disclosing it to third parties without proper authority.
  It is one of the ethical values expected of an accountant, along with integrity, objectivity, professional competence and professional behaviour.
```

```yaml
type: mcq
topic: "SCENARIO Scenario-Based Decision Question"
stem: "Ridgeway Bicycles must choose between two suppliers. Which of the following is NON-ACCOUNTING information for this decision?"
options:
  - "The credit period each supplier allows"
  - "The supplier's record for delivering on time"
  - "The unit cost charged by each supplier"
  - "The cash discount each supplier offers"
answer: 1
marks: 1
misconception: accounting-vs-non-accounting-information
worked: |
  Accounting information can be measured in money and comes from the accounting records - unit cost, cash discount and credit period all do.
  Non-accounting information cannot be measured in money but still affects the decision - reliability of delivery, quality, reputation, after-sales service and the environmental record of the supplier.
  A good decision answer uses BOTH kinds.
```

```yaml
type: mcq
topic: "SCENARIO Scenario-Based Decision Question"
stem: "In the scenario-based decision question, what must a full answer contain?"
options:
  - "A decision only, with no reasons"
  - "Two reasons only, without stating which option is chosen"
  - "A clear decision, supported by two reasons that use both accounting and non-accounting information"
  - "A list of every figure given in the question, with no decision"
answer: 2
marks: 1
misconception: scenario-answer-structure
worked: |
  The marks are for justified reasoning, not for one 'right' answer.
  State the DECISION clearly, then give TWO reasons. Each reason should be tied to the evidence in the scenario, and between them they should use both accounting information (figures) and non-accounting information (quality, reliability, reputation).
  An answer with no clear decision, or with only accounting reasons, loses marks.
```

```yaml
type: mcq
topic: "SCENARIO Scenario-Based Decision Question"
stem: "Ridgeway Bicycles needs 500 helmets. Supplier P charges $9.00 each with a trade discount of 4%. Supplier Q charges $8.80 each with no discount but adds a delivery charge of $150. What is the total cost of buying from Supplier P?"
options:
  - "$4,500"
  - "$4,550"
  - "$4,680"
  - "$4,320"
answer: 3
marks: 1
misconception: trade-discount-in-decision
worked: |
  List price from Supplier P = 500 x $9.00 = $4,500.
  Trade discount = 4% x 4,500 = $180.
  Total cost from Supplier P = 4,500 - 180 = $4,320.
  (For comparison, Supplier Q would cost 500 x 8.80 + 150 = 4,400 + 150 = $4,550, so P is $230 cheaper. The final decision would also weigh non-accounting factors such as quality and delivery reliability.)
```

## TEACHING

```yaml
kind: poa
name: "Statement of Financial Performance (Trading Business)"
lines:
  - "Sales revenue"
  - "Less: Sales returns"
  - "= Net sales revenue"
  - "Less: Cost of sales"
  - "= Gross profit"
  - "Add: Other income (discount received, commission income, rent income, gain on disposal, impairment loss on trade receivables recovered)"
  - "Less: Other expenses (wages, rent, insurance, electricity, discount allowed, carriage outwards, depreciation, impairment loss on trade receivables, impairment loss on inventory, loss on disposal)"
  - "= Profit for the year"
note: "Heading must read: Name of business / Statement of Financial Performance / for the year ended 31 December 2026. Format marks are free marks - get the headings and the order right."
```

```yaml
kind: poa
name: "Statement of Financial Performance (Service Business)"
lines:
  - "Service fee revenue"
  - "Add: Other income"
  - "Less: Other expenses"
  - "= Profit for the year"
note: "A service business holds no inventory for resale, so there is NO cost of sales and NO gross profit line. Do not invent one."
```

```yaml
kind: poa
name: "Statement of Financial Position (Sole Proprietorship)"
lines:
  - "ASSETS"
  - "Non-current assets (each at cost - accumulated depreciation = carrying amount)"
  - "Current assets: Inventory; Trade receivables (net of allowance for impairment); Prepaid expenses; Income receivable; Cash at bank; Cash in hand"
  - "= Total assets"
  - "EQUITY AND LIABILITIES"
  - "Equity: Capital at start + Additional capital + Profit for the year - Drawings = Capital at end"
  - "Non-current liabilities: long-term borrowings (portion due after 12 months)"
  - "Current liabilities: Trade payables; Expenses payable (accrued); Income received in advance; Current portion of long-term borrowings; Bank overdraft"
  - "= Total equity and liabilities"
note: "Total assets MUST equal total equity and liabilities. Assets are listed non-current first, then current, in order of decreasing permanence."
```

```yaml
kind: poa
name: "Running-Balance Ledger Account (3-column)"
lines:
  - "Column headings: Date | Details | Dr $ | Cr $ | Balance $"
  - "Opening balance is written on the first line, in the Balance column, with its Dr or Cr suffix"
  - "Each transaction is entered in the Dr column OR the Cr column"
  - "A new balance is worked out and written on EVERY line"
  - "Every balance carries a Dr or Cr suffix (e.g. 580 Dr)"
note: "The 7086 paper uses this 3-column running-balance format, NOT the two-sided T-account. Never leave a balance without its Dr/Cr suffix."
```

```yaml
kind: poa
name: "Trial Balance"
lines:
  - "Heading: Trial Balance as at 31 December 2026"
  - "Columns: Details | Dr $ | Cr $"
  - "Dr column: assets, expenses, drawings"
  - "Cr column: liabilities, capital, income"
  - "Cr column also holds the contra accounts: accumulated depreciation and allowance for impairment of trade receivables"
  - "Total both columns - they must agree"
note: "An agreed trial balance proves only arithmetical accuracy. Errors of omission, commission, principle, original entry, complete reversal and compensating errors leave it in agreement."
```

```yaml
kind: poa
name: "Bank Reconciliation Statement"
lines:
  - "Heading: Bank Reconciliation Statement as at 31 December 2026"
  - "Balance as per updated Cash at Bank ledger account"
  - "Add: unpresented cheques (the bank has not paid them out yet)"
  - "Less: deposits not yet credited (the bank has not received them yet)"
  - "= Balance as per bank statement"
note: "Start from the UPDATED cash book balance, never the original one. If you start from the bank statement instead, the two adjustments reverse: less unpresented cheques, add deposits not yet credited."
```

```yaml
kind: poa
name: "Updating the Cash at Bank Ledger Before Reconciling"
lines:
  - "Debit the ledger with: direct credits received; interest received; a standing order collected on your behalf"
  - "Credit the ledger with: bank charges; interest charged; direct debits; standing orders paid; dishonoured cheques"
  - "Also correct any error made by the BUSINESS in its own cash book"
  - "Then bring down the updated balance - this is the figure used in the reconciliation statement AND in the Statement of Financial Position"
note: "An error made by the BANK is never entered in your ledger - it is adjusted on the reconciliation statement instead."
```

```yaml
kind: poa
name: "General Journal Entry with Narrative"
lines:
  - "Columns: Date | Details | Dr $ | Cr $"
  - "The account to be DEBITED is written first, against the left margin"
  - "The account to be CREDITED is written on the next line, indented"
  - "The narrative is written below, in brackets, explaining the reason for the entry"
  - "Example: Dr Motor vehicles 12 000 / Cr Capital 12 000 / (Owner brought her van into the business)"
note: "Total debits must equal total credits in every journal entry. The narrative earns a mark - never leave it out."
```

```yaml
kind: poa
name: "Straight-Line Depreciation Schedule"
lines:
  - "Annual charge = (Cost - Residual value) / Useful life in years"
  - "Or, if given as a percentage on cost: Annual charge = % x Cost"
  - "The charge is the SAME every year"
  - "Accumulated depreciation = annual charge x number of years held"
  - "Carrying amount = Cost - Accumulated depreciation"
note: "Do not forget the residual value. Dr Depreciation expense; Cr Accumulated depreciation."
```

```yaml
kind: poa
name: "Reducing-Balance Depreciation Schedule"
lines:
  - "Year 1 charge = % x Cost"
  - "Carrying amount at end of year 1 = Cost - Year 1 charge"
  - "Year 2 charge = % x Carrying amount at end of year 1"
  - "Carrying amount at end of year 2 = Carrying amount at end of year 1 - Year 2 charge"
  - "The charge falls every year and the asset is never written down to zero"
note: "The percentage is applied to the CARRYING AMOUNT, not to cost. Applying it to cost each year is the single most common error."
```

```yaml
kind: poa
name: "Disposal of a Non-Current Asset"
lines:
  - "Dr Disposal / Cr Non-current asset - with the COST of the asset"
  - "Dr Accumulated depreciation / Cr Disposal - with the accumulated depreciation on that asset"
  - "Dr Cash at bank (or Trade receivable) / Cr Disposal - with the sale proceeds"
  - "Balance the disposal account: proceeds > carrying amount = GAIN on disposal (other income)"
  - "Proceeds < carrying amount = LOSS on disposal (other expense)"
note: "Carrying amount = cost - accumulated depreciation. Always compare the proceeds with the CARRYING AMOUNT, never with the cost."
```

```yaml
kind: poa
name: "FIFO Perpetual Inventory Record Card"
lines:
  - "Columns: Date | Purchases (Qty, Unit cost, Total) | Cost of sales (Qty, Unit cost, Total) | Balance (Qty, Unit cost, Total)"
  - "Every purchase adds a new cost LAYER to the balance column"
  - "Every sale takes units out of the OLDEST layer first"
  - "A sale may cut across two layers - show each layer on its own line"
  - "Closing inventory = the layers still left in the balance column"
note: "FIFO = first in, first out. The 7086 syllabus records inventory perpetually and values it on FIFO only - no other valuation method is examined."
```

```yaml
kind: poa
name: "Impairment Loss on Inventory (Lower of Cost and NRV)"
lines:
  - "Net realisable value (NRV) = estimated selling price - costs still needed to make the sale"
  - "Compare NRV with cost for that inventory line"
  - "If NRV is HIGHER than cost, leave the inventory at cost - do nothing"
  - "If NRV is LOWER than cost, write the inventory down to NRV"
  - "Impairment loss on inventory = Cost - NRV"
  - "Dr Impairment loss on inventory; Cr Inventory"
note: "Inventory is valued at the LOWER of cost and net realisable value. This applies the prudence theory - assets and profit must never be overstated."
```

```yaml
kind: poa
name: "Allowance for Impairment of Trade Receivables"
lines:
  - "Required allowance = % x trade receivables AFTER any write-offs"
  - "Compare with the existing allowance brought forward"
  - "INCREASE: Dr Impairment loss on trade receivables; Cr Allowance for impairment - the increase is an other expense"
  - "DECREASE: Dr Allowance for impairment; Cr Impairment loss on trade receivables - the decrease REDUCES other expenses"
  - "Only the change goes to the Statement of Financial Performance; the whole allowance goes to the Statement of Financial Position"
note: "Write off any specific bad debt FIRST, then calculate the percentage on what is left. Never charge the whole allowance as this year's expense."
```

```yaml
kind: poa
name: "Trade Receivables in the Statement of Financial Position"
lines:
  - "Trade receivables (gross)"
  - "Less: Allowance for impairment of trade receivables"
  - "= Trade receivables (net) - this is the figure added into total current assets"
note: "Always show the gross figure, the allowance and the net figure. Using the gross figure in the total is a classic slip."
```

```yaml
kind: poa
name: "Cost of a Non-Current Asset (Capital Expenditure)"
lines:
  - "Purchase price (after any trade discount)"
  - "Add: delivery / carriage inwards on the asset"
  - "Add: installation and testing costs"
  - "Add: legal fees on the purchase of property"
  - "= Cost of the non-current asset (this is the figure that is depreciated)"
  - "EXCLUDE: insurance for the period, operator training, repairs, road tax, fuel - these are revenue expenditure"
note: "Capital expenditure = anything needed to bring the asset to its working location and condition. Everything else is an expense of the period."
```

```yaml
kind: poa
name: "Equity Section of the Statement of Financial Position"
lines:
  - "Capital at 1 January"
  - "Add: Additional capital brought in during the year"
  - "Add: Profit for the year (or Less: Loss for the year)"
  - "Less: Drawings (cash and goods, goods at COST)"
  - "= Capital at 31 December"
note: "Profit for the year flows from the Statement of Financial Performance into the equity section. Drawings are DEDUCTED - they are never an expense."
```

```yaml
kind: poa
name: "Year-End Adjustment Map"
lines:
  - "Accrued expense (expense payable): add to the expense; show as a CURRENT LIABILITY"
  - "Prepaid expense: deduct from the expense; show as a CURRENT ASSET"
  - "Income receivable (accrued income): add to the income; show as a CURRENT ASSET"
  - "Income received in advance: deduct from the income; show as a CURRENT LIABILITY"
  - "Expense for the year = opening prepayment + cash paid - closing prepayment - opening accrual + closing accrual"
note: "Every adjustment has TWO effects - one in the Statement of Financial Performance and one in the Statement of Financial Position. Miss one and the statement will not balance."
```

```yaml
kind: poa
name: "Correction of Errors - Effect on Profit"
lines:
  - "Columns: Error | Journal entry to correct | Increase in profit $ | Decrease in profit $"
  - "An EXPENSE understated or omitted: correcting it DECREASES profit"
  - "An EXPENSE overstated or duplicated: correcting it INCREASES profit"
  - "INCOME understated or omitted: correcting it INCREASES profit"
  - "INCOME overstated: correcting it DECREASES profit"
  - "An error between two Statement-of-Financial-Position accounts has NO effect on profit"
  - "Corrected profit = profit before correction + increases - decreases"
note: "The six errors NOT revealed by the trial balance are: omission, commission, principle, original entry, complete reversal and compensating errors."
```

```yaml
kind: poa
name: "Scenario-Based Decision Answer"
lines:
  - "Line 1: State the DECISION clearly - which option you recommend"
  - "Reason 1: an ACCOUNTING point, quoting the figure from the scenario and saying what it means"
  - "Reason 2: a NON-ACCOUNTING point drawn from the scenario (quality, reliability, reputation, after-sales service, environmental record, staff skill)"
  - "Tie each reason back to the owner's objective"
  - "There is no single correct choice - the marks are for justified reasoning"
note: "The context will be inventory, trade receivables or trade payables. Two reasons using only figures will not earn full marks - you must use non-accounting information too."
```

```yaml
kind: definition
term: "Asset"
topic: "G3 Elements, Accounting Equation & Types of Business"
body: "A resource controlled by the business as a result of past events, from which the business expects to obtain future economic benefits."
```

```yaml
kind: definition
term: "Accounting equation"
topic: "G3 Elements, Accounting Equation & Types of Business"
body: "Assets = Liabilities + Equity. Every transaction changes at least two items and the equation always stays in balance."
```

```yaml
kind: definition
term: "Sole proprietorship"
topic: "G3 Elements, Accounting Equation & Types of Business"
body: "A business owned and controlled by one person, who provides the capital, keeps all the profit and has unlimited liability for the debts of the business."
```

```yaml
kind: definition
term: "Double entry"
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
body: "The recording of every transaction twice, once as a debit and once as an equal credit, so that the accounting equation stays in balance."
```

```yaml
kind: definition
term: "Trial balance"
topic: "G5 Double Entry, Journals, Ledgers & Trial Balance"
body: "A list of all the ledger balances at a date, with debit balances in one column and credit balances in the other, prepared to check the arithmetical accuracy of the double entry."
```

```yaml
kind: definition
term: "Credit note"
topic: "G4 Source Documents & Internal Controls"
body: "A source document issued by a seller to a customer to reduce the amount owed, usually because goods have been returned or an overcharge has been made."
```

```yaml
kind: definition
term: "Debit note"
topic: "G4 Source Documents & Internal Controls"
body: "A source document sent by a buyer to a supplier requesting a reduction in the amount owed. The supplier responds by issuing a credit note."
```

```yaml
kind: definition
term: "Internal control"
topic: "G4 Source Documents & Internal Controls"
body: "A measure put in place by a business to safeguard its assets, ensure the records are accurate and reliable, and encourage compliance with the law - for example, segregation of duties over cash."
```

```yaml
kind: definition
term: "Accrued expense (expense payable)"
topic: "G6 Income & Expenses and Year-End Adjustments"
body: "An expense that has been incurred in the period but not yet paid at the year end. It is added to the expense and shown as a current liability."
```

```yaml
kind: definition
term: "Prepaid expense"
topic: "G6 Income & Expenses and Year-End Adjustments"
body: "An amount paid during the period for a benefit that belongs to the next period. It is deducted from the expense and shown as a current asset."
```

```yaml
kind: definition
term: "Income received in advance"
topic: "G6 Income & Expenses and Year-End Adjustments"
body: "Money received for a service the business has not yet provided. It is deducted from the income of the period and shown as a current liability."
```

```yaml
kind: definition
term: "Depreciation"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "The allocation of the cost of a non-current asset, less any residual value, over its useful life. It is an expense of each period, not a fall in market value and not a fund of cash."
```

```yaml
kind: definition
term: "Net realisable value"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "The estimated selling price of inventory less all the costs still needed to complete the sale."
```

```yaml
kind: definition
term: "First-in, first-out (FIFO)"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "An inventory valuation method which assumes the goods bought earliest are sold first, so the closing inventory is valued at the most recent purchase costs."
```

```yaml
kind: definition
term: "Capital expenditure"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "Spending on acquiring a non-current asset, or on bringing it to its working location and condition. It is added to the cost of the asset and depreciated over the asset's useful life."
```

```yaml
kind: definition
term: "Revenue expenditure"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "Spending on the day-to-day running of the business, or on maintaining a non-current asset in its existing condition. It is charged as an expense in the period it is incurred."
```

```yaml
kind: definition
term: "Carrying amount"
topic: "G7 Inventory, Non-Current Assets & Depreciation"
body: "The cost of a non-current asset less its accumulated depreciation. It is the figure shown for that asset in the Statement of Financial Position."
```

```yaml
kind: definition
term: "Allowance for impairment of trade receivables"
topic: "G8 Trade Receivables & Impairment"
body: "An estimate of the trade receivables that may not be collected. It is a contra-asset with a credit balance and is deducted from trade receivables in the Statement of Financial Position."
```

```yaml
kind: definition
term: "Impairment loss on trade receivables"
topic: "G8 Trade Receivables & Impairment"
body: "The expense recorded when a specific debt is judged unrecoverable and written off, together with any increase in the allowance for impairment."
```

```yaml
kind: definition
term: "Trade discount"
topic: "G8 Trade Receivables & Impairment"
body: "A reduction in the list price given to encourage bulk buying. It is deducted before the invoice is prepared, so it never appears in the ledger."
```

```yaml
kind: definition
term: "Cash discount"
topic: "G8 Trade Receivables & Impairment"
body: "A reduction offered for prompt payment within an agreed period. It IS recorded - as discount allowed (an other expense) by the seller and discount received (other income) by the buyer."
```

```yaml
kind: definition
term: "Capital"
topic: "G9 Liabilities, Capital, Drawings & Equity"
body: "The resources the owner puts into the business. It is the amount the business owes the owner, and it increases with profit and additional capital and decreases with losses and drawings."
```

```yaml
kind: definition
term: "Drawings"
topic: "G9 Liabilities, Capital, Drawings & Equity"
body: "Cash or goods taken out of the business by the owner for personal use. Drawings reduce equity and are never an expense. Goods are recorded at cost."
```

```yaml
kind: definition
term: "Prudence theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "Assets and income must not be overstated and liabilities and expenses must not be understated. Likely losses are recognised as soon as they are foreseen - as in the allowance for impairment and the lower of cost and net realisable value."
```

```yaml
kind: definition
term: "Matching theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "Expenses are matched against the income they help to earn and are recorded in the period they are incurred, not the period they are paid. This is the basis of accruals and prepayments."
```

```yaml
kind: definition
term: "Going concern theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "The financial statements are prepared on the assumption that the business will continue to operate for the foreseeable future. This is why non-current assets are depreciated over their useful life rather than shown at break-up value."
```

```yaml
kind: definition
term: "Consistency theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "The same accounting methods are used from one period to the next, so that the financial statements of different years can be compared."
```

```yaml
kind: definition
term: "Accounting entity theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "The business is treated as separate and distinct from its owner. Only the transactions of the business are recorded; the owner's private affairs are not."
```

```yaml
kind: definition
term: "Materiality theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "Items that are too small to influence the decisions of users need not be reported separately or capitalised. A low-cost item may simply be written off as an expense."
```

```yaml
kind: definition
term: "Objectivity theory"
topic: "G2 Accounting Theories (assumptions & principles)"
body: "Accounting records must be based on verifiable evidence, such as source documents, and be free from personal bias or opinion."
```
