import type { PlaygroundLesson } from "@/lib/playground-lessons";

// Life Skills expansion, enriched for Project Playground.
// Keyed by Life Skills track key: money, founder, confidence, calm, lifeos,
// communication, digital, paycheck, pathfinder, adulting.
// Every original concept, choice, reveal and insight is preserved exactly.
// Each lesson gains ONE hands-on step (match, order or tiles) before its insight.
export const LIFE_EXPANSION: Record<string, PlaygroundLesson[]> = {
  money: [
    {
      key: "money-3",
      title: "Give Every Dollar a Job",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "A plan before you spend",
          body: "When your allowance lands, it is easy to spend without thinking, then wonder where it went. A simple fix is to give each dollar a job before you touch it. Even a rough split calms the guessing."
        },
        {
          kind: "choice",
          question: "You get 50 dollars a week and want a saving habit without feeling broke. Which plan is the steadiest start?",
          options: [
            "Spend first, save whatever is left at the end of the week",
            "Set aside a small fixed amount to save first, then spend the rest",
            "Save all of it and buy nothing at all",
            "Borrow from next week so you can spend more now"
          ],
          correct: 1,
          explain: "Saving a fixed slice first means the habit does not depend on leftovers, which usually never appear. Saving everything is not sustainable and borrowing forward just digs a hole for next week."
        },
        {
          kind: "reveal",
          prompt: "Think of one small saving job you could give a few dollars this week. What is it for?",
          answer: "A tiny, named goal works best, like a game top-up, a gift, or a small buffer for surprises. A dollar with a name is much harder to spend by accident."
        },
        {
          kind: "order",
          prompt: "Put the pay yourself first routine in the order that keeps a saving habit alive.",
          items: [
            "Your allowance lands",
            "Move a small fixed slice straight into savings",
            "Give the rest planned jobs",
            "Spend only from the planned jobs"
          ],
          explain: "Savings come off the top the moment the money arrives, then the rest gets planned jobs, and you only spend from those jobs. Saving first is what makes the habit stick.",
          ask: "Let us set the money in motion. Drag these into the order that saves first, then spends. Start with what happens the moment the cash arrives.",
          hints: [
            "Something has to happen before you can save or spend anything.",
            "The whole trick is that saving comes before spending, not after.",
            "Money lands, then save a slice, then plan the rest, then spend from the plan."
          ]
        },
        {
          kind: "insight",
          body: "Money without a plan drifts. Give each dollar a job first, and your allowance starts working for you instead of vanishing."
        }
      ],
      talkPrompt: "Play my money coach and quiz me on splitting my weekly allowance into save and spend."
    },
    {
      key: "money-4",
      title: "Needs, Wants, and the Grey Zone",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Two different questions",
          body: "A need keeps your week working: bus fare, food, school things. A want is nice to have but the day runs fine without it. Most money stress comes from paying for wants as if they were needs."
        },
        {
          kind: "choice",
          question: "Which of these is closest to a true need for a normal school week?",
          options: [
            "A new phone case in your favourite colour",
            "Bus fare to get to and from school",
            "Bubble tea after every single lesson",
            "The latest skin in your game"
          ],
          correct: 1,
          explain: "Bus fare gets you to school, so it is a need your week depends on. A phone case, daily bubble tea, and game skins are wants, pleasant but skippable without breaking anything."
        },
        {
          kind: "reveal",
          prompt: "Picture your last three buys. Which was a want dressed up as a need in your head?",
          answer: "The grey zone is real. Naming a want honestly does not mean never buying it, it just means you choose it on purpose instead of on autopilot."
        },
        {
          kind: "match",
          prompt: "Sort each item into need or want for a normal school week.",
          pairs: [
            { left: "Bus fare to school", right: "Need" },
            { left: "Lunch on a school day", right: "Need" },
            { left: "Daily bubble tea", right: "Want" },
            { left: "The newest game skin", right: "Want" }
          ],
          explain: "Bus fare and lunch keep your school week running, so they are needs. Bubble tea and a game skin are pleasant extras the day survives without, so they are wants.",
          ask: "Let us sort your spending. Tap an item, then tap need or want. Start with the one you feel surest about.",
          hints: [
            "Ask if your week actually breaks without it.",
            "If skipping it just means slightly less fun, it is a want.",
            "Getting to school and eating are needs, treats are wants."
          ]
        },
        {
          kind: "insight",
          body: "Needs come first, wants come with a plan. The skill is not saying no to fun, it is knowing which is which before you pay."
        }
      ],
      talkPrompt: "Read me items one by one and let me sort each into need or want, then check my calls."
    },
    {
      key: "money-5",
      title: "The Unit Price Trick",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Price per amount, not per sticker",
          body: "The bigger pack is not always cheaper, and the small one is not always a rip off. To really compare, work out the price for the same amount. Divide the price by the size to get a price per unit."
        },
        {
          kind: "reveal",
          prompt: "Drink A is 2 dollars for 500ml. What is that per 100ml?",
          answer: "2 divided by 500, times 100, is 40 cents per 100ml. Turning everything into a price per 100ml lets you line up any two sizes fairly."
        },
        {
          kind: "choice",
          question: "Drink A is 2 dollars for 500ml. Drink B is 3 dollars for 900ml. Which is cheaper per 100ml?",
          options: [
            "Drink A, because its total price is lower",
            "Drink B, because it costs less per 100ml",
            "They cost exactly the same per 100ml",
            "You cannot tell without the brand"
          ],
          correct: 1,
          explain: "Drink A is 40 cents per 100ml, Drink B is about 33 cents per 100ml, so B gives more drink per dollar. Picking the lower sticker price ignores how much you actually get for it."
        },
        {
          kind: "match",
          prompt: "Match each drink to its price per 100ml.",
          pairs: [
            { left: "Drink A, 2 dollars for 500ml", right: "40 cents per 100ml" },
            { left: "Drink B, 3 dollars for 900ml", right: "About 33 cents per 100ml" },
            { left: "Drink C, 1 dollar for 250ml", right: "40 cents per 100ml" }
          ],
          explain: "Divide price by size then scale to 100ml. Drink A is 2 divided by 500 times 100, which is 40 cents. Drink B is 3 divided by 900 times 100, about 33 cents. Drink C is 1 divided by 250 times 100, also 40 cents.",
          ask: "Let us line them up fairly. Tap a drink, then tap its price per 100ml. Start with any one you can work out.",
          hints: [
            "Divide the price by the size, then multiply by 100.",
            "Drink A and Drink C both work out to the same figure.",
            "Drink B gives more millilitres per dollar, so its per 100ml price is the lowest."
          ]
        },
        {
          kind: "insight",
          body: "The lowest price tag is not the best deal. Price per unit tells you where your dollar buys the most, and it takes ten seconds to check."
        }
      ],
      talkPrompt: "Give me two shop items with different sizes and prices and drill me on working out the better unit price."
    },
    {
      key: "money-6",
      title: "Spotting a Money Scam",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "The three red flags",
          body: "Most scams share a pattern: a prize or threat you did not expect, heavy urgency, and a request for a code, password, or one time PIN. Any one of these should slow you right down. All three together is a loud alarm."
        },
        {
          kind: "choice",
          question: "A message says you won a lucky draw you never entered, and to claim it you must share your bank OTP now. What is the safest move?",
          options: [
            "Share the OTP fast before the prize expires",
            "Never share the OTP, and check with a trusted adult or the bank directly",
            "Reply asking for more details about the prize",
            "Click the link just to see if it looks real"
          ],
          correct: 1,
          explain: "A real bank or draw never needs your OTP, and a prize you did not enter plus urgency is a classic trap. Replying or clicking only tells the scammer your number is live and worth pushing harder."
        },
        {
          kind: "reveal",
          prompt: "Why do scammers push so hard to make you act right now?",
          answer: "Urgency stops you from thinking or asking anyone. The moment you pause and check with a trusted adult, most scams fall apart, which is exactly why they hate the pause."
        },
        {
          kind: "match",
          prompt: "Match each scam red flag to the line that shows it.",
          pairs: [
            { left: "An unexpected prize or threat", right: "You won a draw you never entered" },
            { left: "Heavy urgency", right: "Claim it in the next ten minutes or lose it" },
            { left: "A request for a secret code", right: "Just send me the OTP to confirm" }
          ],
          explain: "The three classic flags are a prize or threat you did not expect, pressure to act right now, and a request for a code or PIN. Matching the flag to the line trains you to spot the pattern fast.",
          ask: "Let us name the traps. Tap a red flag, then tap the line that gives it away. Start with the one that stands out most.",
          hints: [
            "One flag is about a reward or threat you never asked for.",
            "One flag is all about rushing you so you cannot think.",
            "One flag asks for the one thing you must never share, your OTP."
          ]
        },
        {
          kind: "insight",
          body: "Your OTP and passwords are yours alone. When a message rushes you toward money, slow down and verify, because pausing is the whole defence."
        }
      ],
      talkPrompt: "Send me pretend scam messages one at a time and let me spot the red flags before you reveal them."
    }
  ],
  founder: [
    {
      key: "founder-3",
      title: "Find a Problem Worth Solving",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Start from an annoyance",
          body: "Good small businesses do not start with a clever product. They start with a problem people already feel, often a small repeated annoyance. If others share it, you have something to build around."
        },
        {
          kind: "choice",
          question: "Which sounds like a real problem you could build a small school service around?",
          options: [
            "Classmates keep forgetting which day CCA gear is due",
            "You wish you were famous",
            "You want a lot of money quickly",
            "Everyone should just like your idea"
          ],
          correct: 0,
          explain: "A specific, repeated annoyance that others share is a problem a service can solve, like a shared reminder. Wanting fame or fast money is a wish about you, not a problem you can fix for a customer."
        },
        {
          kind: "reveal",
          prompt: "What is one thing at school that people quietly complain about every week?",
          answer: "That quiet, repeated complaint is your raw material. The best first ideas fix something small and real, not something big and impressive."
        },
        {
          kind: "match",
          prompt: "Sort each statement into a problem worth solving or just a wish.",
          pairs: [
            { left: "Classmates forget which day CCA gear is due", right: "A problem worth solving" },
            { left: "The tuck shop queue is always slow at recess", right: "A problem worth solving" },
            { left: "I wish I were famous", right: "Just a wish" },
            { left: "I want a lot of money quickly", right: "Just a wish" }
          ],
          explain: "A problem worth solving is a shared, repeated annoyance you can fix for someone, like forgotten gear days or a slow queue. A wish is about how you want to feel, and it points to no customer to serve.",
          ask: "Let us hunt for real problems. Tap a statement, then tap problem or wish. Start with the one that sounds most like a customer complaint.",
          hints: [
            "A problem is felt by other people, not just wanted by you.",
            "If it starts with I wish or I want, it is usually about you.",
            "Forgotten gear and slow queues are problems, fame and fast money are wishes."
          ]
        },
        {
          kind: "insight",
          body: "Chase a problem, not a product. When you solve something people already grumble about, you never have to convince them they need it."
        }
      ],
      talkPrompt: "Act as my startup mentor and help me turn one everyday school annoyance into a tiny business idea."
    },
    {
      key: "founder-4",
      title: "Your Tiny First Product",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Smallest version first",
          body: "You do not need a shop, a logo, or 500 units to start. You need the smallest version that helps one real person. Build that, show it to a few people, and let real interest tell you what to do next."
        },
        {
          kind: "reveal",
          prompt: "You want to sell handmade keychains. What is the smallest version you could test this week?",
          answer: "Make about five, show friends, and see who actually reaches for their wallet. A few real buyers teach you more than a perfect plan on paper."
        },
        {
          kind: "choice",
          question: "You want to sell those keychains. What is the smartest first step?",
          options: [
            "Order 500 units and rent a booth",
            "Make five, show friends, and see who actually buys one",
            "Build a fancy website before anything else",
            "Wait until the design is perfect"
          ],
          correct: 1,
          explain: "Making a few and testing real demand costs almost nothing and teaches you fast. Ordering 500 or building a big site spends money and time before you know a single person wants it."
        },
        {
          kind: "order",
          prompt: "Put the tiny first test in the order that costs least and teaches most.",
          items: [
            "Make about five keychains",
            "Show them to a few friends",
            "See who actually reaches for their wallet",
            "Improve the next batch from what you learned"
          ],
          explain: "You build a tiny batch, put it in front of real people, watch who truly buys, then improve. Testing before you spend big is the whole point of a small first product.",
          ask: "Let us test cheaply. Drag these into the order that spends the least before you learn anything. Start with the very first thing you make.",
          hints: [
            "You cannot show anything until you have made a small batch.",
            "Real buyers, not opinions, tell you if it works.",
            "Make a few, show them, watch who buys, then improve."
          ]
        },
        {
          kind: "insight",
          body: "Start small enough to fail cheaply. A tiny first version tested on real people beats a grand plan that never leaves your head."
        }
      ],
      talkPrompt: "Be my product coach and help me shrink my idea to the smallest thing I can test on five people."
    },
    {
      key: "founder-5",
      title: "Pricing a Small Service",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Cover more than materials",
          body: "A fair price covers three things: what your materials cost, what your time is worth, and a little extra so the work is worth repeating. Skip the middle one and you end up busy but broke."
        },
        {
          kind: "choice",
          question: "You wash bikes. Materials cost 2 dollars a bike and it takes you 30 minutes. If you charge exactly 2 dollars, what is the problem?",
          options: [
            "Nothing, you covered your costs",
            "Your time earned nothing, so it is not worth repeating",
            "You charged far too much",
            "You should just do it for free"
          ],
          correct: 1,
          explain: "A price that only covers materials pays you zero for your time and effort, so the work burns you out. Charging a bit above cost is how a service keeps running, not greed."
        },
        {
          kind: "reveal",
          prompt: "If your time is worth even 5 dollars for that 30 minutes, what is a fairer price per bike?",
          answer: "Materials of 2 plus 5 for your time is 7, and a small buffer takes it to about 8. Now each wash actually pays you, so you can keep going."
        },
        {
          kind: "order",
          prompt: "Build a fair bike wash price by adding the parts in order.",
          items: [
            "Start with the 2 dollars of materials",
            "Add 5 dollars for your 30 minutes of time",
            "Add about 1 dollar as a small buffer",
            "Charge about 8 dollars a bike"
          ],
          explain: "Materials of 2 plus time of 5 plus a buffer of about 1 comes to roughly 8 dollars. Building the price part by part makes sure your time is never left out.",
          ask: "Let us price it so it pays you. Drag the parts into the order you add them up. Start with the cost you cannot avoid.",
          hints: [
            "Begin with what the job actually costs you in materials.",
            "The part people forget is paying themselves for their time.",
            "Materials, then time, then a small buffer, then the total."
          ]
        },
        {
          kind: "insight",
          body: "Your time is a real cost. Price it in, or you build a job that quietly pays you nothing and slowly drains your energy."
        }
      ],
      talkPrompt: "Play a customer and let me practise setting and explaining a fair price for a small service."
    },
    {
      key: "founder-6",
      title: "Learning From a Flop",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "A flop is data",
          body: "Your first try might barely sell, and that is normal. A flop is not a verdict on you, it is information. The founders who improve are the ones who ask what the flop is trying to tell them."
        },
        {
          kind: "choice",
          question: "Your bake sale barely sold. What is the most useful next move?",
          options: [
            "Decide you are bad at business and quit",
            "Ask a few people who walked past why they did not buy",
            "Blame the weather and forget about it",
            "Drop the price to zero forever"
          ],
          correct: 1,
          explain: "Asking non-buyers turns a flop into feedback you can use, maybe it was the price, the spot, or the timing. Quitting or blaming luck throws away the one lesson the flop just handed you."
        },
        {
          kind: "reveal",
          prompt: "If three people said your snacks looked great but were too pricey, what would you change first?",
          answer: "Test a lower price or a smaller portion next time, then watch if sales move. One clear signal from real people beats guessing in your head."
        },
        {
          kind: "match",
          prompt: "Match each response to a flop with whether it helps you improve.",
          pairs: [
            { left: "Ask non-buyers why they walked past", right: "Turns the flop into useful feedback" },
            { left: "Change one thing and try again", right: "Turns the flop into useful feedback" },
            { left: "Decide you are just bad at this and quit", right: "Throws the lesson away" },
            { left: "Blame the weather and forget it", right: "Throws the lesson away" }
          ],
          explain: "Asking non-buyers and changing one thing pull real lessons out of a flop. Quitting or blaming luck bins the very information the flop handed you.",
          ask: "Let us mine the flop for gold. Tap a response, then tap whether it helps or wastes the lesson. Start with the one that gathers real information.",
          hints: [
            "A useful response gets you new information from real people.",
            "Quitting or blaming luck leaves you knowing nothing new.",
            "Asking and adjusting help, quitting and blaming waste the lesson."
          ]
        },
        {
          kind: "insight",
          body: "A flop is a free lesson if you collect it. Ask why, change one thing, and try again smarter than before."
        }
      ],
      talkPrompt: "Pretend a small project of mine flopped and coach me through turning it into useful feedback."
    }
  ],
  confidence: [
    {
      key: "confidence-3",
      title: "Reframe a Bad Test",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "A snapshot, not a verdict",
          body: "One low mark feels huge, but it is a snapshot of one day, not a judgement on who you are. The useful move is to read the paper like a map, showing you exactly where the marks slipped away."
        },
        {
          kind: "reveal",
          prompt: "You scored lower than you hoped. What is one specific thing the paper shows you to work on?",
          answer: "Usually the losses cluster in a topic or a question type, not everywhere at once. Finding that cluster turns a heavy feeling into a short, doable list."
        },
        {
          kind: "choice",
          question: "Which response actually helps you improve after a low mark?",
          options: [
            "I am just hopeless at this subject",
            "I lost most marks on one topic, so I will drill that topic",
            "The teacher clearly hates me",
            "I will never look at this paper again"
          ],
          correct: 1,
          explain: "Naming the exact topic that cost marks turns a bad feeling into a plan you can act on. Calling yourself hopeless is a label that stops you looking for the fixable cause underneath."
        },
        {
          kind: "order",
          prompt: "Put the calm reframe of a bad test into a sensible order.",
          items: [
            "Read the paper calmly instead of hiding it",
            "Find the topic that lost the most marks",
            "Make a short drill list for that topic",
            "Aim your next effort right there"
          ],
          explain: "You face the paper, spot where the marks clustered, turn that into a short list, then aim your effort. That path turns a heavy feeling into a plan you can act on.",
          ask: "Let us turn the result into a plan. Drag these into the order that leads to a fix. Start with what you do before you can learn anything.",
          hints: [
            "You have to actually look at the paper first.",
            "Find the pattern before you decide what to practise.",
            "Look, find the topic, list the drills, then aim your effort."
          ]
        },
        {
          kind: "insight",
          body: "A bad test is feedback, not a final grade on you. Read the paper, find the pattern, and aim your next effort where it counts."
        }
      ],
      talkPrompt: "Act as my calm study coach and help me turn one disappointing result into a short improvement plan."
    },
    {
      key: "confidence-4",
      title: "The Comparison Trap",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Highlight reel versus real life",
          body: "Online you see people at their best: the perfect timetable, the neat notes, the top result. What you never see is their messy drafts and hard days. Comparing your behind the scenes to their highlight reel is not a fair fight."
        },
        {
          kind: "choice",
          question: "A friend posts a perfect study timetable and you feel behind. What is the clearest read?",
          options: [
            "They are simply better than you at everything",
            "You are seeing their chosen best moment, not their hard days",
            "You should copy their exact timetable today",
            "You should just stop studying"
          ],
          correct: 1,
          explain: "A post shows a picked highlight, not the struggle behind it, so it is a poor measuring stick. Assuming they beat you everywhere, or copying blindly, ignores that your subjects, pace, and life are different."
        },
        {
          kind: "reveal",
          prompt: "Whose progress is actually fair to compare your progress to?",
          answer: "Your own, last month. Measuring against past you shows real movement, while measuring against a stranger's highlight only feeds the trap."
        },
        {
          kind: "match",
          prompt: "Match each comparison with whether it is fair or a trap.",
          pairs: [
            { left: "Your progress now against your own last month", right: "A fair comparison" },
            { left: "Your hard days against their posted highlight", right: "The comparison trap" },
            { left: "Your full messy story against their trailer", right: "The comparison trap" }
          ],
          explain: "Measuring against your past self shows real movement, so it is fair. Measuring your behind the scenes against someone's chosen highlight is the trap, because you never see their hard days.",
          ask: "Let us find the fair fight. Tap a comparison, then tap fair or trap. Start with the one that measures you against yourself.",
          hints: [
            "A fair comparison uses the same person on both sides.",
            "A post is a chosen best moment, not the whole story.",
            "Past you is fair, a stranger's highlight is the trap."
          ]
        },
        {
          kind: "insight",
          body: "You cannot compare your full story to someone else's trailer. Race your past self instead, and the trap loses its grip."
        }
      ],
      talkPrompt: "Help me talk through a moment I felt behind after scrolling, and reframe it fairly."
    },
    {
      key: "confidence-5",
      title: "Speaking Up in Class",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Your question is shared",
          body: "That question stuck in your throat is probably in three other heads too. Nobody thinks less of you for asking, and often the class is quietly relieved. The nerves are normal, they just need a small handle to hold."
        },
        {
          kind: "reveal",
          prompt: "What is one low stakes way you could speak up just once tomorrow?",
          answer: "Small counts: answer a question you already know, or ask one short thing after class. One rep at a time is how speaking up gets easier, not one big brave leap."
        },
        {
          kind: "choice",
          question: "You are nervous to ask a question in class. What lowers the fear the most?",
          options: [
            "Wait until you feel completely fearless",
            "Prepare the question in one clear sentence beforehand",
            "Never ask and just hope it clears up later",
            "Fire off ten questions all at once"
          ],
          correct: 1,
          explain: "A pre-written one line question gives you something solid to hold when nerves hit. Waiting to feel fearless means waiting forever, because some nerves are normal and never fully vanish."
        },
        {
          kind: "order",
          prompt: "Put the low stakes way to speak up into a doable order.",
          items: [
            "Write your question in one clear sentence",
            "Wait for a natural pause in the lesson",
            "Ask your one prepared question",
            "Notice it felt easier than you feared"
          ],
          explain: "You prepare one sentence, wait for a gap, ask it, then notice the fear shrink. A prepared line and one small rep beat waiting to feel fearless.",
          ask: "Let us make speaking up doable. Drag these into the order that lowers the fear. Start with what you do before class even begins.",
          hints: [
            "Preparation happens before you open your mouth.",
            "You need a gap in the lesson to jump into.",
            "Write it, wait for a pause, ask, then notice it got easier."
          ]
        },
        {
          kind: "insight",
          body: "Courage is not the absence of nerves, it is a small prepared step taken while nervous. Bring one ready question and start there."
        }
      ],
      talkPrompt: "Role-play a class where I practise asking one clear question out loud without freezing."
    },
    {
      key: "confidence-6",
      title: "Growth Mindset, the Honest Version",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Effort plus method",
          body: "A growth mindset is not the fairy tale that you can do absolutely anything. It is the honest claim that with practice and better methods, you can get meaningfully better at hard things. That is realistic, and it is enough."
        },
        {
          kind: "choice",
          question: "Which is the honest version of a growth mindset?",
          options: [
            "If I try hard enough I can do absolutely anything",
            "With practice and better methods, I can get meaningfully better at this",
            "Talent is fixed, so there is no point trying",
            "I already know everything I need to know"
          ],
          correct: 1,
          explain: "Growth is about improving with practice and smarter methods, which is both realistic and motivating. The anything claim sets you up to feel like a failure the moment a real limit appears, which is the opposite of helpful."
        },
        {
          kind: "reveal",
          prompt: "Think of a skill you were once bad at and are now okay at. What actually moved you forward?",
          answer: "Almost always it was repeated practice plus a tweak in how you did it, not raw talent. That mix is exactly what you can repeat on the next hard thing."
        },
        {
          kind: "match",
          prompt: "Match each statement with whether it is the honest growth mindset or a myth.",
          pairs: [
            { left: "With practice and better methods I can get meaningfully better", right: "Honest growth mindset" },
            { left: "If I try hard enough I can do absolutely anything", right: "A myth" },
            { left: "Talent is fixed, so there is no point trying", right: "A myth" }
          ],
          explain: "The honest version says practice and better methods move you forward, which is realistic. The anything claim and the fixed talent claim are both myths that set you up to give up.",
          ask: "Let us sort the mindset from the myth. Tap a statement, then tap honest or myth. Start with the one that mentions practice and methods.",
          hints: [
            "The honest version is realistic, not a fairy tale.",
            "Absolutely anything is too big a promise to keep.",
            "Practice and methods is honest, anything and fixed talent are myths."
          ]
        },
        {
          kind: "insight",
          body: "You will not become good at everything, and you do not need to be. With practice and a better method, you can get better at the things that matter to you."
        }
      ],
      talkPrompt: "Coach me through building a realistic growth mindset for one subject I find hard."
    }
  ],
  calm: [
    {
      key: "calm-3",
      title: "Box Breathing Before a Paper",
      minutes: 3,
      steps: [
        {
          kind: "concept",
          heading: "A reset you can carry",
          body: "Before a paper your heart can race and your mind can blank. Box breathing is a quiet reset you can do at your desk: in for four counts, hold four, out four, hold four. A few slow rounds tells your body it is safe to settle."
        },
        {
          kind: "reveal",
          prompt: "Try one round now. Breathe in for four, hold four, out four, hold four. How does the second round feel?",
          answer: "Most people feel their shoulders drop a little by the second or third round. It will not erase the nerves, it just turns the volume down enough to think."
        },
        {
          kind: "choice",
          question: "Your heart is racing before the exam starts. Which is a calm, safe reset?",
          options: [
            "Hold your breath as long as you possibly can",
            "Breathe in for four, hold four, out four, hold four, a few rounds",
            "Down a lot of coffee very fast",
            "Tell yourself you are going to fail"
          ],
          correct: 1,
          explain: "Slow, even box breathing signals your body to settle and steadies your focus. Holding your breath or loading up on caffeine usually spikes the jittery feeling instead of calming it."
        },
        {
          kind: "order",
          prompt: "Put one round of box breathing into its correct order.",
          items: [
            "Breathe in for four counts",
            "Hold for four counts",
            "Breathe out for four counts",
            "Hold for four counts"
          ],
          explain: "In four, hold four, out four, hold four is one full box. The even four count on every side is what makes it a box and what tells your body to settle.",
          ask: "Let us breathe it out. Drag the four sides of the box into order. Start with the very first thing you do, before you hold anything.",
          hints: [
            "You have to take air in before you can hold or release it.",
            "Each side of the box is the same four counts.",
            "In, hold, out, hold, all four counts each."
          ]
        },
        {
          kind: "insight",
          body: "You cannot always control the nerves, but you can control your breath. A slow four count box is a calm button you carry into every exam hall."
        }
      ],
      talkPrompt: "Walk me through a box breathing round and help me build a two minute pre exam calm routine."
    },
    {
      key: "calm-4",
      title: "Shrink a Big Task",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Freeze comes from the whole pile",
          body: "A giant revision list can make you freeze, not because you are lazy but because your brain sees the whole mountain at once. The trick is to stop looking at the mountain and pick only the first small step."
        },
        {
          kind: "choice",
          question: "A huge revision list is making you freeze. What unsticks you fastest?",
          options: [
            "Stare at the whole list until it feels smaller",
            "Pick the smallest first step and do only that",
            "Do nothing until you finally feel motivated",
            "Try to finish absolutely everything tonight"
          ],
          correct: 1,
          explain: "Doing one tiny first step lowers the overwhelm and builds momentum you can ride into the next step. Waiting for motivation, or trying to do it all at once, keeps you stuck staring at the mountain."
        },
        {
          kind: "reveal",
          prompt: "Look at your biggest task right now. What is the smallest possible first step, one you could finish in five minutes?",
          answer: "Something like open the file, or write the first heading. It should feel almost too easy, because easy is what gets you moving when frozen."
        },
        {
          kind: "order",
          prompt: "Put the unfreeze move into order, from stuck to moving.",
          items: [
            "Look away from the whole mountain of a list",
            "Pick the smallest possible first step",
            "Do only that one small step",
            "Ride the momentum into the next step"
          ],
          explain: "You stop staring at the whole pile, choose the tiniest step, do just that, then let momentum carry you. Shrinking the start is what beats the freeze.",
          ask: "Let us get you moving. Drag these from stuck to unstuck. Start with what you stop doing before you can pick a step.",
          hints: [
            "The freeze comes from looking at everything at once.",
            "You choose one tiny step before you do anything.",
            "Look away, pick the smallest step, do it, then keep going."
          ]
        },
        {
          kind: "insight",
          body: "You do not have to see the whole path to take the first step. Shrink the task until the start feels easy, and momentum does the rest."
        }
      ],
      talkPrompt: "Help me break one overwhelming assignment into the smallest possible first step and a simple order after it."
    },
    {
      key: "calm-5",
      title: "Sleep Is Study Fuel",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Sleep files your memory",
          body: "While you sleep, your brain sorts and stores what you studied that day. That is why a rested brain recalls faster in the exam than a foggy one. Skipping sleep to cram often trades an hour of notes for a slower, blurrier morning."
        },
        {
          kind: "choice",
          question: "It is the night before a paper. Which choice usually helps your marks more?",
          options: [
            "Stay up all night cramming every page",
            "Do a light review and get a full night of sleep",
            "Skip sleep and rely on energy drinks",
            "Study until 4am then nap thirty minutes"
          ],
          correct: 1,
          explain: "Sleep is when your brain files what you studied, so rest often beats a frantic all nighter. Cramming without sleep leaves you foggy and slower to recall exactly when you need to be sharp."
        },
        {
          kind: "reveal",
          prompt: "What is one small change tonight that would get you thirty more minutes of sleep?",
          answer: "Often it is putting the phone in another room, or setting a fixed lights off time. Small, boring changes protect the fuel your memory runs on."
        },
        {
          kind: "match",
          prompt: "Match each night-before choice with its likely effect on your marks.",
          pairs: [
            { left: "Light review, then a full night of sleep", right: "Sharper recall in the morning" },
            { left: "Staying up all night cramming", right: "Foggy, slower recall" },
            { left: "Skipping sleep and using energy drinks", right: "Foggy, slower recall" }
          ],
          explain: "Sleep files what you studied, so a light review plus rest sharpens recall. All night cramming and caffeine instead of sleep leave you foggy exactly when you need to be sharp.",
          ask: "Let us weigh the night before. Tap a choice, then tap its likely effect. Start with the one that includes real sleep.",
          hints: [
            "Sleep is when the brain stores what you learned.",
            "No sleep leaves you slow and blurry, however hard you crammed.",
            "Rest sharpens recall, all nighters and energy drinks fog it."
          ]
        },
        {
          kind: "insight",
          body: "Sleep is not time stolen from study, it is part of study. A rested brain remembers what a tired one forgets."
        }
      ],
      talkPrompt: "Help me plan a realistic wind down routine so I get enough sleep before exam days."
    },
    {
      key: "calm-6",
      title: "When It Feels Like Too Much",
      minutes: 5,
      steps: [
        {
          kind: "concept",
          heading: "Some stress is bigger than nerves",
          body: "Normal exam nerves come and go. But sometimes a heavy feeling settles in and does not lift, or things start to feel hopeless. That is not weakness and it is not something to hide. It is a signal to reach out, not to push through alone."
        },
        {
          kind: "reveal",
          prompt: "Who is one adult you trust enough to tell if a heavy feeling would not lift, at home or in school?",
          answer: "A parent, a relative, a teacher, or a school counsellor all count. Having one name ready makes it far easier to actually reach out on a hard day."
        },
        {
          kind: "choice",
          question: "A friend says everything feels hopeless and they cannot see a way forward. What is the kind, responsible thing to do?",
          options: [
            "Tell them to just cheer up and toughen up",
            "Listen, take it seriously, and help them reach a trusted adult or call 1767",
            "Keep it a total secret no matter what happens",
            "Change the subject quickly to avoid the awkwardness"
          ],
          correct: 1,
          explain: "Taking it seriously and helping them reach a trusted adult, or the Samaritans of Singapore line 1767, connects them to real support. Telling someone to toughen up, or hiding it, can leave them more alone with a heavy feeling."
        },
        {
          kind: "match",
          prompt: "Match each response to a struggling friend with whether it is kind and responsible.",
          pairs: [
            { left: "Listen and help them reach a trusted adult or 1767", right: "Kind and responsible" },
            { left: "Tell them to just toughen up", right: "Leaves them more alone" },
            { left: "Keep it a total secret whatever happens", right: "Leaves them more alone" }
          ],
          explain: "Listening and helping them reach a trusted adult or the Samaritans of Singapore on 1767 connects them to real support. Dismissing them or hiding it leaves a heavy feeling to grow alone.",
          ask: "Let us look after a friend. Tap a response, then tap whether it truly helps. Start with the one that reaches for real support.",
          hints: [
            "The kind move connects them with someone who can help.",
            "Toughen up and total secrecy both leave them isolated.",
            "Listening and reaching a trusted adult or 1767 is the caring choice."
          ]
        },
        {
          kind: "insight",
          body: "You do not have to carry heavy feelings alone, and neither does a friend. A trusted adult, or the Samaritans of Singapore on 1767, is there to listen any time it feels like too much."
        }
      ],
      talkPrompt: "Help me practise gently checking in on a friend who seems to be struggling, and what support to point them to."
    }
  ],
  lifeos: [
    {
      key: "lifeos-3",
      title: "One Inbox for Tasks",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Stop storing tasks in five places",
          body: "Right now your homework might live in your head, three chat groups, and a random note. Scattered like that, things slip. One inbox means one single place where every task gets written down the moment you hear it."
        },
        {
          kind: "choice",
          question: "Reminders are spread across your memory, chats, and stray notes. Why does one inbox help?",
          options: [
            "It looks neater on your desk",
            "One place to check means fewer tasks slip through unseen",
            "It makes your teachers happy",
            "It removes any need to ever review tasks"
          ],
          correct: 1,
          explain: "A single capture spot means you only have one place to check, so tasks stop falling through the gaps between apps. It does not remove reviewing, you still look at the list, but nothing hides in five different places."
        },
        {
          kind: "reveal",
          prompt: "Where could your one inbox live so you would actually check it daily?",
          answer: "Wherever you already look most: a single notes app, a planner, or one pinned chat to yourself. The best inbox is the one you will not forget to open."
        },
        {
          kind: "order",
          prompt: "Put the one inbox habit into a working order.",
          items: [
            "Hear a new task",
            "Write it into your one inbox right away",
            "Check that inbox every day",
            "Do or schedule each item on the list"
          ],
          explain: "Every task gets captured in one place the moment you hear it, then you check that one place daily and act on it. One inbox works only if everything lands there and you open it.",
          ask: "Let us build the habit loop. Drag these into the order the system runs. Start with the moment a task first reaches you.",
          hints: [
            "The loop starts the instant a task appears.",
            "Capture has to come before checking or doing.",
            "Hear it, write it in one place, check daily, then act."
          ]
        },
        {
          kind: "insight",
          body: "A calm mind is not one that remembers everything, it is one that trusts its inbox. Capture in one place, and stop juggling tasks in your head."
        }
      ],
      talkPrompt: "Help me set up one simple task inbox and a habit for dropping everything into it."
    },
    {
      key: "lifeos-4",
      title: "The Two Minute Rule",
      minutes: 3,
      steps: [
        {
          kind: "concept",
          heading: "Small now, big later",
          body: "Here is a tiny rule with big payoff: if a task takes under two minutes, do it now. Reply to that message, refill the bottle, file that worksheet. Tiny tasks left undone pile up into a heavy, cluttered mind."
        },
        {
          kind: "choice",
          question: "Your water bottle needs a refill and a 20 page essay is due next week. How does the two minute rule apply?",
          options: [
            "Refill the bottle now, it is under two minutes, and schedule the essay",
            "Do the whole essay right now in one sitting",
            "Ignore both of them",
            "Refill the bottle ten times to feel busy"
          ],
          correct: 0,
          explain: "The rule clears the tiny task instantly so it stops nagging you, while the big essay gets planned across days, not crammed. The rule is for quick wins, not an excuse for fake busywork."
        },
        {
          kind: "reveal",
          prompt: "What two minute task have you been putting off that you could clear right after this?",
          answer: "Often it is one reply, one tidy, or one thing filed away. Clearing it now frees a surprising amount of mental space for the bigger work."
        },
        {
          kind: "match",
          prompt: "Match each task with what the two minute rule says to do.",
          pairs: [
            { left: "Refill your water bottle", right: "Do it now" },
            { left: "Reply to one short message", right: "Do it now" },
            { left: "Write a 20 page essay", right: "Schedule it for later" },
            { left: "Plan a whole group project", right: "Schedule it for later" }
          ],
          explain: "Anything under two minutes gets done on the spot so it stops nagging you. Bigger jobs like an essay or a project get planned across days instead.",
          ask: "Let us clear the small stuff. Tap a task, then tap do it now or schedule it. Start with the quickest one.",
          hints: [
            "If it takes under two minutes, it goes in the now pile.",
            "Big multi day jobs cannot be finished in two minutes.",
            "Quick tasks now, big projects scheduled."
          ]
        },
        {
          kind: "insight",
          body: "Small tasks get heavy when they wait. If it takes under two minutes, do it now, and keep the little stuff from clogging your day."
        }
      ],
      talkPrompt: "Quiz me with tasks and let me decide fast which ones the two minute rule says to do right now."
    },
    {
      key: "lifeos-5",
      title: "The Weekly Reset",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Fifteen minutes that save your week",
          body: "A weekly reset is a short, fixed slot, about fifteen minutes, to tidy your tasks, glance at the coming week, and clear your bag. Done once a week, it stops Monday from ambushing you with forgotten things."
        },
        {
          kind: "reveal",
          prompt: "What day and time could become your regular weekly reset?",
          answer: "Sunday evening works for many, but any repeatable slot is fine. The power is in it being the same time each week, so it becomes automatic rather than a decision."
        },
        {
          kind: "choice",
          question: "What is the real point of a short weekly reset?",
          options: [
            "To feel guilty about last week",
            "To clear the clutter and set up the coming week before it starts",
            "To redo all of last week's homework",
            "To delete your whole task list and start over"
          ],
          correct: 1,
          explain: "A reset clears leftover clutter and lines up the week ahead, so you begin on the front foot. It is not about guilt or redoing work, just a calm look forward before the week begins."
        },
        {
          kind: "order",
          prompt: "Put a fifteen minute weekly reset into a smooth order.",
          items: [
            "Sit down at your fixed weekly slot",
            "Tidy and update your task list",
            "Glance at what the coming week holds",
            "Clear out and repack your bag"
          ],
          explain: "You show up at the same slot, tidy your tasks, look ahead at the week, then clear your bag. A repeatable order is what turns the reset into a habit instead of a chore.",
          ask: "Let us design your reset. Drag these into a smooth order. Start with the thing that makes it happen at all.",
          hints: [
            "It only happens if you actually sit down at the slot.",
            "Tidy what is behind you before you look ahead.",
            "Sit down, tidy tasks, look ahead, then sort your bag."
          ]
        },
        {
          kind: "insight",
          body: "You do not drift into an organised week, you set one up. Fifteen calm minutes each week beats seven days of scrambling."
        }
      ],
      talkPrompt: "Help me design a fifteen minute weekly reset checklist that fits a school student's Sunday."
    },
    {
      key: "lifeos-6",
      title: "Protect Focus From Your Phone",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Distance beats willpower",
          body: "Your phone splits your attention even when it is silent, because part of your brain keeps half an eye out for it. Fighting that with willpower is exhausting. It is far easier to just move the phone out of reach."
        },
        {
          kind: "choice",
          question: "You want 40 minutes of focused revision. Where should your phone be?",
          options: [
            "In your hand, turned face down",
            "In another room or a drawer, on silent",
            "On the desk, screen up, for the whole time",
            "Playing videos quietly in the background"
          ],
          correct: 1,
          explain: "Distance beats willpower, because a phone out of reach removes the constant pull to check it. Face down on the desk still tempts you every time it lights up, and background videos split your focus outright."
        },
        {
          kind: "reveal",
          prompt: "Where in your room could your phone go during study so reaching it takes real effort?",
          answer: "A drawer, a shelf across the room, or another room entirely. The harder it is to grab, the less often your hand drifts toward it out of habit."
        },
        {
          kind: "match",
          prompt: "Match each phone spot with what it does to your focus.",
          pairs: [
            { left: "In another room on silent", right: "Protects your focus" },
            { left: "Face down on the desk", right: "Still tempts you when it lights up" },
            { left: "Playing videos in the background", right: "Splits your focus outright" }
          ],
          explain: "A phone out of reach removes the pull to check it, so distance protects focus. On the desk it still tempts you, and a background video splits your attention completely.",
          ask: "Let us set up for focus. Tap a phone spot, then tap what it does to your attention. Start with the one that puts real distance between you and it.",
          hints: [
            "The best spot makes reaching the phone take real effort.",
            "Face down still lights up and tugs at you.",
            "Another room protects focus, desk tempts, background video splits it."
          ]
        },
        {
          kind: "insight",
          body: "You do not have to out willpower your phone all evening. Put distance between you and it, and focus gets a lot cheaper."
        }
      ],
      talkPrompt: "Help me build a simple phone away setup so I can focus for a study block without fighting the urge to check it."
    }
  ],
  communication: [
    {
      key: "communication-3",
      title: "Ask a Clear Question",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Vague in, vague out",
          body: "A vague question gets a vague answer. The fastest help comes when you say what you already tried and point to the exact spot you are stuck. That lets the other person aim their explanation right at your gap."
        },
        {
          kind: "choice",
          question: "You are stuck on a maths step. Which question gets the best help?",
          options: [
            "I do not get maths, help",
            "I got to this line but I do not see why we divide by two here, can you explain that step",
            "This is impossible",
            "Can you just do the whole thing for me"
          ],
          correct: 1,
          explain: "Naming exactly where you are stuck lets the helper target that step, so you actually learn the gap. A vague I do not get it forces them to guess where to even begin, which wastes both your time."
        },
        {
          kind: "reveal",
          prompt: "Think of something you are stuck on now. Can you name the exact step where it stops making sense?",
          answer: "Pinning the precise spot is half the solution. Often, just forcing yourself to name it clearly makes the answer click before you even ask."
        },
        {
          kind: "match",
          prompt: "Match each question with whether it is clear or vague.",
          pairs: [
            { left: "I do not see why we divide by two on this line", right: "A clear question" },
            { left: "I got this far but the next step confuses me", right: "A clear question" },
            { left: "I do not get maths, help", right: "A vague question" },
            { left: "This is impossible", right: "A vague question" }
          ],
          explain: "A clear question names the exact step you are stuck on, so the helper can aim right at it. A vague one makes them guess where to even start, wasting both your time.",
          ask: "Let us sharpen your asks. Tap a question, then tap clear or vague. Start with the one that points to an exact step.",
          hints: [
            "A clear question shows exactly where you got stuck.",
            "If the helper has to guess where you are, it is vague.",
            "Naming the step is clear, I do not get it is vague."
          ]
        },
        {
          kind: "insight",
          body: "Good questions get good answers. Say what you tried and where you are stuck, and help arrives faster and sticks better."
        }
      ],
      talkPrompt: "Let me practise turning a vague I am stuck into a sharp, specific question you can actually answer."
    },
    {
      key: "communication-4",
      title: "Active Listening",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Listening is not waiting to talk",
          body: "Real listening is not silently loading up your own reply. It is following what the other person means, then reflecting a little of it back so they know you got it. That small mirror is what makes people feel heard."
        },
        {
          kind: "choice",
          question: "Your friend is venting about a rough week. What shows you are really listening?",
          options: [
            "Immediately talk about your own, worse week",
            "Reflect back what you heard, like that sounds really draining",
            "Check your phone while nodding along",
            "Jump in with a fix before they finish"
          ],
          correct: 1,
          explain: "Reflecting back what you heard shows the person they were understood, which is what venting needs first. Redirecting to yourself, or fixing too fast, can leave them feeling unheard even if you meant well."
        },
        {
          kind: "reveal",
          prompt: "Before offering a friend a solution, what is one question that shows you are still listening?",
          answer: "Something like do you want advice, or do you just need to vent. Asking that respects what they actually need, instead of assuming."
        },
        {
          kind: "order",
          prompt: "Put active listening into the order that makes a friend feel heard.",
          items: [
            "Let them finish without cutting in",
            "Reflect back what you heard them say",
            "Ask if they want advice or just to vent",
            "Then respond to what they actually need"
          ],
          explain: "You let them finish, mirror back what you heard, check what they want, then respond. Feeling heard comes before any fix, which is why the reflecting step comes early.",
          ask: "Let us practise really listening. Drag these into the order that helps a friend feel heard. Start with what you do while they are still talking.",
          hints: [
            "The first job is simply not to interrupt.",
            "Show you heard them before you check what they need.",
            "Listen, reflect, ask what they want, then respond."
          ]
        },
        {
          kind: "insight",
          body: "People remember feeling heard more than being fixed. Reflect back what you hear first, and advice lands far better afterward."
        }
      ],
      talkPrompt: "Role-play a friend venting and let me practise active listening before I rush to solve it."
    },
    {
      key: "communication-5",
      title: "Saying No Kindly",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Warm, clear, and brief",
          body: "You can turn something down without a fight or a guilt spiral. A kind no is warm in tone, clear in message, and short. You can even offer a smaller thing you are happy to do instead."
        },
        {
          kind: "choice",
          question: "A classmate wants to copy your homework. What is a kind but firm no?",
          options: [
            "Sure, take it, whatever",
            "I would rather not, but I can walk through the tricky part with you",
            "No, and honestly you are just lazy",
            "Maybe, ask me later, then avoid them all day"
          ],
          correct: 1,
          explain: "A warm no with an offer to help keeps both the friendship and your integrity. Giving in, insulting them, or dodging all skip the honest, kind answer that actually respects both of you."
        },
        {
          kind: "reveal",
          prompt: "Think of a request you find hard to refuse. What is a warm, one line no you could keep ready?",
          answer: "Something like I cannot do that, but here is what I can do. Having a line ready means you are not scrambling for words in the moment."
        },
        {
          kind: "tiles",
          prompt: "Build a warm, ready made kind no from the tiles.",
          tiles: [
            "I cannot do that,",
            "but here is",
            "what I can do instead",
            "you are just lazy,",
            "whatever, take it"
          ],
          answer: [
            "I cannot do that,",
            "but here is",
            "what I can do instead"
          ],
          explain: "I cannot do that, but here is what I can do instead is warm, clear and short, and it offers a smaller help. The other tiles either give in or insult, which a kind no never does.",
          ask: "Let us script your kind no. Tap the tiles in order to build a warm refusal that still offers help. Start with the clear no.",
          hints: [
            "Begin with a short, clear refusal, not an insult.",
            "A kind no offers a smaller thing you can do instead.",
            "I cannot do that, but here is what I can do instead."
          ]
        },
        {
          kind: "insight",
          body: "No is a full sentence, and it can still be kind. Warm tone, clear message, maybe a smaller offer, and you keep both your boundary and the friendship."
        }
      ],
      talkPrompt: "Play someone asking me for a favour I should decline, so I can practise a kind but firm no."
    },
    {
      key: "communication-6",
      title: "A Good Apology",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Own it, no but",
          body: "A real apology has three parts: name what you did, own it without a but, and offer to make it right. The word but at the wrong moment quietly cancels everything before it."
        },
        {
          kind: "choice",
          question: "You snapped at a friend. Which is a real apology?",
          options: [
            "Sorry you got upset",
            "I am sorry I snapped at you, that was unfair, I will watch my tone",
            "Sorry, but you started it",
            "Why are you always so sensitive"
          ],
          correct: 1,
          explain: "Naming what you did and offering to change shows you truly own it. Sorry you got upset shifts blame onto their feelings, and adding but you started it cancels the apology completely."
        },
        {
          kind: "reveal",
          prompt: "Think of a recent slip up. How would you name it and own it in one honest sentence, with no but?",
          answer: "Try I am sorry I did X, that was not fair to you. Leaving out the but is what makes it land as sincere rather than defensive."
        },
        {
          kind: "order",
          prompt: "Put the three parts of a good apology into order.",
          items: [
            "Name exactly what you did",
            "Own it with no but attached",
            "Offer to make it right"
          ],
          explain: "You name what you did, own it without a but, then offer to make it right. Skipping any part, especially owning it cleanly, is what makes an apology feel hollow.",
          ask: "Let us build a real apology. Drag the three parts into order. Start with saying plainly what you did.",
          hints: [
            "First you have to name the thing you actually did.",
            "Owning it means no but, no excuse.",
            "Name it, own it, then offer to make it right."
          ]
        },
        {
          kind: "insight",
          body: "A good apology names the wrong, owns it fully, and offers repair. Drop the but, and sorry finally means something."
        }
      ],
      talkPrompt: "Help me draft a genuine apology for a specific thing, checking it has no sneaky but in it."
    }
  ],
  digital: [
    {
      key: "digital-3",
      title: "Your Digital Footprint",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Screenshots are forever",
          body: "Anything you post can be saved, shared, and resurfaced long after you forget it. Delete does not undo a screenshot. Your digital footprint is the trail you leave, and future teachers, schools, and employers can sometimes see parts of it."
        },
        {
          kind: "choice",
          question: "Before posting a joke about a classmate, what is the wise check?",
          options: [
            "Would this be fine if screenshotted and seen by teachers and family later",
            "Will it get lots of likes right now",
            "Is it funny to me alone",
            "Can I delete it fast enough afterward"
          ],
          correct: 0,
          explain: "Assuming anything posted can be saved and resurfaced later helps you post things you can stand behind. Chasing likes or trusting fast deletion both ignore that a screenshot outlives the post itself."
        },
        {
          kind: "reveal",
          prompt: "Picture your current posts seen by a school you want to join in three years. Anything you would quietly remove?",
          answer: "If something makes you wince, that is useful information now, while you still can tidy it. A footprint you are proud of is easier to keep than to repair."
        },
        {
          kind: "match",
          prompt: "Match each before-posting habit with whether it protects your footprint.",
          pairs: [
            { left: "Ask if you would stand behind it if screenshotted", right: "Protects your footprint" },
            { left: "Post fast to chase likes right now", right: "Risks your footprint" },
            { left: "Trust that you can delete it quickly", right: "Risks your footprint" }
          ],
          explain: "Pausing to ask whether you could stand behind a screenshot protects your footprint. Chasing likes or trusting fast deletion ignores that a saved screenshot outlives the post.",
          ask: "Let us guard your trail. Tap a habit, then tap protects or risks. Start with the one that pauses before posting.",
          hints: [
            "A screenshot can outlive anything you delete.",
            "Chasing likes and quick deletion both ignore that.",
            "Pausing protects, chasing likes and trusting delete both risk it."
          ]
        },
        {
          kind: "insight",
          body: "Post like it is permanent, because it can be. A little pause before you share protects the version of you that shows up years from now."
        }
      ],
      talkPrompt: "Help me think through my digital footprint and what a future school or boss might see."
    },
    {
      key: "digital-4",
      title: "Spotting Misinformation",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Check before you share",
          body: "False claims spread fast because they are dramatic and easy to forward. Before you pass something on, do a quick check: who is the source, when was it posted, and does a trusted outlet report the same thing."
        },
        {
          kind: "choice",
          question: "A shocking claim is going round a chat group. What is the first smart check?",
          options: [
            "Forward it fast so friends know",
            "See if a trusted news source reports the same thing",
            "Believe it because so many people shared it",
            "Add your own dramatic caption and repost"
          ],
          correct: 1,
          explain: "Checking a trusted source tells you whether the claim holds up before you help it spread. Lots of shares is not proof, since false things spread fast precisely because they are dramatic and satisfying to forward."
        },
        {
          kind: "reveal",
          prompt: "You get a scary health claim with no source. What is the fastest way to test it?",
          answer: "Search the exact claim and see if reliable outlets or fact checkers back it. If only random posts repeat it and no trusted source does, treat it as doubtful."
        },
        {
          kind: "order",
          prompt: "Put the check before you share routine into order.",
          items: [
            "Pause before you forward anything",
            "Check who the source actually is",
            "See if a trusted outlet reports the same thing",
            "Share only if it holds up"
          ],
          explain: "You pause, look at the source, compare against a trusted outlet, then share only if it checks out. The pause up front is what stops you spreading a false claim.",
          ask: "Let us slow the spread. Drag these into the order that checks a claim. Start with what you do before touching forward.",
          hints: [
            "The first move is simply not to forward yet.",
            "Look at where it came from before deciding.",
            "Pause, check the source, compare a trusted outlet, then share."
          ]
        },
        {
          kind: "insight",
          body: "Do not be the reason a false story travels. Check the source before you share, and let the pause do the fact checking."
        }
      ],
      talkPrompt: "Send me viral claims one at a time and coach me through checking if each is trustworthy."
    },
    {
      key: "digital-5",
      title: "Phishing and Fake Links",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Real looking, not real",
          body: "Phishing messages copy real logos and wording to trick you into clicking a fake link and typing your login. The giveaways are urgency, a link you did not expect, and a request to log in through that exact link."
        },
        {
          kind: "choice",
          question: "An email says your account will close today unless you log in through this link. What is safest?",
          options: [
            "Click the link quickly to save your account",
            "Go to the real site or app directly, not through the email link",
            "Reply with your password so they know it is really you",
            "Forward it to friends to warn them, link and all"
          ],
          correct: 1,
          explain: "Opening the real app, or typing the address you already know, avoids fake links dressed up to look official. Clicking the email link or sending your password hands your login straight to the scammer."
        },
        {
          kind: "reveal",
          prompt: "How can you check where a link really goes before clicking?",
          answer: "Hover or long press to preview the full address, and look at the part just before the first slash. If it is not the real site you expect, do not click it."
        },
        {
          kind: "match",
          prompt: "Match each move with whether it is safe or risky against phishing.",
          pairs: [
            { left: "Open the real app or type the address yourself", right: "Safe" },
            { left: "Click the login link inside the email", right: "Risky" },
            { left: "Reply to the email with your password", right: "Risky" }
          ],
          explain: "Reaching the site yourself avoids fake links dressed up to look official, so it is safe. Clicking the email link or replying with your password hands your login straight to the scammer.",
          ask: "Let us dodge the hook. Tap a move, then tap safe or risky. Start with the one where you reach the site yourself.",
          hints: [
            "The safe move never trusts the link in the message.",
            "Never type or send your password because a message asked.",
            "Reaching the site yourself is safe, clicking or replying is risky."
          ]
        },
        {
          kind: "insight",
          body: "Never log in through a link a stranger sent you. Reach the site yourself, and phishing loses its hook."
        }
      ],
      talkPrompt: "Show me example messages and let me sort real from phishing before you reveal the answer."
    },
    {
      key: "digital-6",
      title: "Being Kind Online",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "A real person behind the screen",
          body: "It is easy to forget a screen name is a real classmate with real feelings. Online, a crowd can pile onto one person fast, and each pile on feels small but adds up to real harm. A pause before you join in matters."
        },
        {
          kind: "choice",
          question: "A pile on is happening against one student in a group chat. What is the kind move?",
          options: [
            "Join in so you are not the odd one out",
            "Do not pile on, and privately check if the person is okay",
            "Screenshot it and share it wider for laughs",
            "Stay silent and quietly enjoy the drama"
          ],
          correct: 1,
          explain: "Refusing to pile on and checking in privately reduces harm to a real classmate. Joining in or sharing it wider spreads the cruelty and makes the target feel even more alone."
        },
        {
          kind: "reveal",
          prompt: "If you cannot stop a pile on, what small thing can you still do for the person targeted?",
          answer: "Message them privately that you saw it and that it was not fair. One quiet kind message can matter a lot when a crowd is loud."
        },
        {
          kind: "order",
          prompt: "Put the kind response to an online pile on into order.",
          items: [
            "Do not add to the pile on",
            "Message the person privately",
            "Tell them you saw it and it was not fair"
          ],
          explain: "First you refuse to join in, then you reach out privately, then you tell them it was not fair. A quiet private kindness can outweigh a loud crowd.",
          ask: "Let us be the kind one. Drag these into the order that helps someone being piled on. Start with what you must not do.",
          hints: [
            "The first step is refusing to make it worse.",
            "Reach the person away from the crowd.",
            "Do not pile on, message privately, tell them it was unfair."
          ]
        },
        {
          kind: "insight",
          body: "Behind every screen name is a person who feels it. Refuse to pile on, and a small private kindness can outweigh a loud crowd."
        }
      ],
      talkPrompt: "Help me think through how to respond when a group chat turns on one person."
    }
  ],
  paycheck: [
    {
      key: "paycheck-3",
      title: "Reading a Payslip",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Gross versus take home",
          body: "A payslip has two numbers that matter most. Gross pay is what you earned before anything comes out. Net pay, or take home, is what actually lands in your account after deductions like CPF. The gap between them is normal."
        },
        {
          kind: "choice",
          question: "Your payslip shows gross pay 500 and net pay 450. What does the 50 difference usually mean?",
          options: [
            "The employer made a mistake",
            "Deductions like CPF came out, so take home is less than gross",
            "You actually earned 950 in total",
            "You owe the company 50 dollars"
          ],
          correct: 1,
          explain: "Gross is before deductions and net is what reaches your account, so the gap is normal deductions such as CPF. It is not an error, and it is certainly not a debt you owe."
        },
        {
          kind: "reveal",
          prompt: "Why is it useful to budget from your net pay rather than your gross pay?",
          answer: "Because net is the money you can actually spend. Planning off gross makes you feel richer than you are, and then the real amount falls short."
        },
        {
          kind: "order",
          prompt: "Put the payslip reading steps into order, from earned to spendable.",
          items: [
            "Find your gross pay, what you earned",
            "Subtract deductions like CPF",
            "That leaves your net pay",
            "Budget from that net pay"
          ],
          explain: "You start at gross pay, take off deductions such as CPF, land on net pay, then budget from net. Net is the money that actually reaches your account, so it is what you plan around.",
          ask: "Let us read the payslip top to bottom. Drag these into order, from what you earned to what you can spend. Start with the biggest number.",
          hints: [
            "Gross is the starting figure before anything comes out.",
            "Deductions happen before you reach take home pay.",
            "Gross, minus deductions, equals net, then budget from net."
          ]
        },
        {
          kind: "insight",
          body: "Gross is the promise, net is the reality. Read both on a payslip, and always budget from what actually reaches your account."
        }
      ],
      talkPrompt: "Walk me through a sample payslip and quiz me on gross, net, and deductions."
    },
    {
      key: "paycheck-4",
      title: "CPF, the Big Idea",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Saving set aside for later",
          body: "At a high level, CPF in Singapore is a national savings scheme. A slice of your pay, plus a share from your employer, is set aside for big future needs like housing, healthcare, and retirement. It is your money, held for your future self."
        },
        {
          kind: "choice",
          question: "At a high level, what is CPF in Singapore?",
          options: [
            "A tax that simply disappears",
            "A savings scheme where part of pay is set aside for future needs like housing and retirement",
            "Money the government keeps forever with no benefit to you",
            "A type of bank loan you have to repay"
          ],
          correct: 1,
          explain: "CPF is a forced savings idea, where part of your pay is set aside for your own future needs. It is not a vanishing tax or a loan, the money is earmarked for your later life."
        },
        {
          kind: "reveal",
          prompt: "Why might a scheme make people save automatically instead of leaving it fully up to them?",
          answer: "Because saving for something decades away is hard when today has so many tempting costs. Automatic saving quietly builds a cushion many people would otherwise never get around to."
        },
        {
          kind: "match",
          prompt: "Match each statement about CPF with whether it is true or a myth.",
          pairs: [
            { left: "Part of pay set aside for future needs like housing and retirement", right: "True about CPF" },
            { left: "A tax that simply disappears", right: "A myth" },
            { left: "A bank loan you have to repay", right: "A myth" }
          ],
          explain: "CPF sets aside part of your pay for your own future needs, so that statement is true. It is neither a vanishing tax nor a loan, the money is held for your later life.",
          ask: "Let us clear up CPF. Tap a statement, then tap true or myth. Start with the one that mentions your future needs.",
          hints: [
            "CPF money is earmarked for your own future.",
            "It is not lost and it is not borrowed.",
            "Saving for the future is true, vanishing tax and loan are myths."
          ]
        },
        {
          kind: "insight",
          body: "CPF is the idea of paying your future self on autopilot. Understanding it early helps the deductions on your first payslip make sense."
        }
      ],
      talkPrompt: "Explain CPF to me at a simple level and let me ask questions about how the idea works."
    },
    {
      key: "paycheck-5",
      title: "Why We Pay Tax",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Pooling for shared things",
          body: "Tax is how a country pools money to pay for things no single person could build alone: roads, schools, hospitals, and public services everyone shares. Income tax is usually charged only on earnings above a certain level."
        },
        {
          kind: "choice",
          question: "Why does a country collect tax?",
          options: [
            "To pay for shared things like roads, schools, and public services",
            "To make citizens poor on purpose",
            "Because banks require it",
            "It has no real purpose at all"
          ],
          correct: 0,
          explain: "Tax pools money to fund shared services everyone uses, like schools and hospitals. It is not designed to harm citizens, it pays for things that no single person could build on their own."
        },
        {
          kind: "reveal",
          prompt: "Name two things you used this week that tax money helps pay for.",
          answer: "Maybe the road your bus used, the public library, or a subsidised clinic. Once you spot them, tax stops feeling like money vanishing and starts looking like shared upkeep."
        },
        {
          kind: "match",
          prompt: "Match each statement about tax with whether it is true or false.",
          pairs: [
            { left: "It pools money for shared services like roads and hospitals", right: "True" },
            { left: "It is designed to make citizens poor on purpose", right: "False" },
            { left: "Banks require a country to collect it", right: "False" }
          ],
          explain: "Tax pools money for shared things no single person could build alone, so that is true. It is not meant to harm citizens and banks do not require it, so those are false.",
          ask: "Let us test what tax really is. Tap a statement, then tap true or false. Start with the one about shared services.",
          hints: [
            "Tax funds things everyone uses together.",
            "It is not a plot against citizens or a bank rule.",
            "Shared services is true, making people poor and bank rules are false."
          ]
        },
        {
          kind: "insight",
          body: "Tax is the shared bill for shared things. Seeing where it goes turns it from a mystery deduction into something you can understand."
        }
      ],
      talkPrompt: "Explain the idea of tax simply and let me ask why we pay for shared services."
    },
    {
      key: "paycheck-6",
      title: "Work Ethic on Day One",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Trust is built early",
          body: "On a first part time job, nobody expects you to know everything. What builds trust fastest is simple: turn up on time, ask when you are unsure, and do even the boring tasks properly. That reliability earns you bigger responsibilities."
        },
        {
          kind: "choice",
          question: "It is your first shift at a part time job. What builds trust fastest?",
          options: [
            "Arrive late but work fast to make up for it",
            "Turn up on time, ask when unsure, and finish small tasks properly",
            "Only do the tasks you personally find fun",
            "Wait to be told every tiny thing without ever asking"
          ],
          correct: 1,
          explain: "Reliability and sensible questions show you can be trusted with more. Skipping dull tasks or arriving late signals the opposite, no matter how quickly you work once you do start."
        },
        {
          kind: "reveal",
          prompt: "If you are unsure how to do a task, what is better than guessing silently?",
          answer: "Ask a short, specific question before you start. A quick check now prevents a bigger mistake later, and it shows you care about getting it right."
        },
        {
          kind: "match",
          prompt: "Match each first shift behaviour with whether it builds or hurts trust.",
          pairs: [
            { left: "Turn up on time", right: "Builds trust" },
            { left: "Ask a short question when unsure", right: "Builds trust" },
            { left: "Arrive late but work fast", right: "Hurts trust" },
            { left: "Only do the tasks you find fun", right: "Hurts trust" }
          ],
          explain: "Turning up on time and asking sensible questions show you can be relied on. Arriving late or skipping the dull tasks signals the opposite, however fast you work once you start.",
          ask: "Let us make a good first impression. Tap a behaviour, then tap builds or hurts trust. Start with the one about being on time.",
          hints: [
            "Reliability is the fastest way to earn trust.",
            "Lateness and cherry picking tasks send the wrong signal.",
            "On time and good questions build trust, lateness and picking hurt it."
          ]
        },
        {
          kind: "insight",
          body: "Skill grows over time, but trust starts on day one. Show up, ask well, and do the small things properly, and the rest follows."
        }
      ],
      talkPrompt: "Role-play my first day at a part time job and coach me on making a good impression."
    }
  ],
  pathfinder: [
    {
      key: "pathfinder-3",
      title: "Interests vs Strengths",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Two useful signals",
          body: "An interest is what you enjoy. A strength is what you are already good at. They are not the same, and they do not always overlap. Both are useful signals about direction, so it helps to notice each without forcing them together too early."
        },
        {
          kind: "choice",
          question: "You love drawing but score highest in maths. What is a wise way to read that?",
          options: [
            "You must pick only one and drop the other forever",
            "Note both, an interest and a strength, and explore paths that use either or both",
            "Ignore the thing you enjoy",
            "Only strengths matter, feelings are useless"
          ],
          correct: 1,
          explain: "Interests and strengths are both useful signals, and many paths blend them, like design that leans on maths. Forcing an early either or throws away information you will want when you choose later."
        },
        {
          kind: "reveal",
          prompt: "Name one interest and one strength of yours. Can you think of a path that touches both?",
          answer: "Often there is an overlap you had not spotted, like enjoying games and being strong at logic pointing toward design or coding. Holding both in view widens your options."
        },
        {
          kind: "match",
          prompt: "Match each description with whether it is an interest or a strength.",
          pairs: [
            { left: "Something you genuinely enjoy doing", right: "An interest" },
            { left: "Drawing that you love in your spare time", right: "An interest" },
            { left: "Something you are already good at", right: "A strength" },
            { left: "Maths, where you score highest", right: "A strength" }
          ],
          explain: "An interest is what you enjoy, a strength is what you already do well. They are different signals, and noticing each without forcing them together keeps your options open.",
          ask: "Let us read your signals. Tap a description, then tap interest or strength. Start with the one about what you enjoy.",
          hints: [
            "An interest is about enjoyment, a strength is about ability.",
            "You can enjoy something you are not yet good at.",
            "What you love is an interest, what you do well is a strength."
          ]
        },
        {
          kind: "insight",
          body: "You do not have to choose between what you love and what you are good at yet. Note both, and look for paths where they meet."
        }
      ],
      talkPrompt: "Help me list my interests and strengths and spot paths that could use both."
    },
    {
      key: "pathfinder-4",
      title: "Paths After O and N Level",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Different routes, not a ladder",
          body: "After O or N level, JC, polytechnic, and ITE are different routes to different kinds of learning, not rungs on a ladder from worst to best. Some suit exam style learning, others suit hands on practical learning. Fit matters more than status."
        },
        {
          kind: "choice",
          question: "How should you compare JC, polytechnic, and ITE?",
          options: [
            "As a strict ranking from best to worst",
            "As different routes that suit different learning styles and goals",
            "By whichever your closest friend picks",
            "By whichever sounds most impressive to others"
          ],
          correct: 1,
          explain: "These are different routes with different styles, hands on versus more exam based, so fit matters more than status. Treating them as a ranking, or copying a friend, ignores what actually suits how you learn."
        },
        {
          kind: "reveal",
          prompt: "Do you learn best through exams and theory, or through hands on projects? How might that hint at a route?",
          answer: "There is no right answer, only your honest one. Knowing how you learn best is a stronger guide than a ranking someone else made up."
        },
        {
          kind: "match",
          prompt: "Match each route with the learning style it leans toward.",
          pairs: [
            { left: "Junior college", right: "Leans toward exams and theory" },
            { left: "Polytechnic", right: "Leans toward hands on, applied projects" },
            { left: "ITE", right: "Leans toward practical, skills based training" }
          ],
          explain: "JC leans toward exam and theory learning, polytechnic toward applied projects, and ITE toward practical skills training. They are different routes for different learners, not a ranking.",
          ask: "Let us match route to style. Tap a route, then tap the learning style it leans toward. Start with the one you know best.",
          hints: [
            "Think about how much is exams versus hands on work.",
            "None of these is better in general, only better for a person.",
            "JC is theory heavy, poly is applied projects, ITE is practical skills."
          ]
        },
        {
          kind: "insight",
          body: "No route here is better in general, only better for a person. Compare them by fit with how you learn, not by prestige."
        }
      ],
      talkPrompt: "Help me compare JC, poly, and ITE by how each fits the way I learn, without ranking them."
    },
    {
      key: "pathfinder-5",
      title: "The Informational Chat",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Ask about a normal day",
          body: "One of the best ways to explore a path is to ask someone already on it what a normal day or week actually looks like, and what they find hard. That real texture tells you far more than a glossy brochure ever will."
        },
        {
          kind: "reveal",
          prompt: "Who is one person you could ask about their job or course, even a relative or a senior?",
          answer: "It does not need to be an expert, just someone honest about their day. A short, friendly chat often reveals things no website mentions."
        },
        {
          kind: "choice",
          question: "You are curious about a nursing course. What question gives the most honest picture?",
          options: [
            "Is it the best career, yes or no",
            "What does a normal week actually look like, and what do you find hard",
            "Will it make me rich",
            "Should I just do it"
          ],
          correct: 1,
          explain: "Asking about a normal week and the hard parts gives you a realistic picture to judge fit. Yes or no and will it make me rich questions only get opinions, not the real texture of the work."
        },
        {
          kind: "match",
          prompt: "Match each question with whether it gives real insight or just an opinion.",
          pairs: [
            { left: "What does a normal week actually look like", right: "Gives real insight" },
            { left: "What do you find hard about it", right: "Gives real insight" },
            { left: "Is it the best career, yes or no", right: "Just an opinion" },
            { left: "Will it make me rich", right: "Just an opinion" }
          ],
          explain: "Questions about a normal week and the hard parts pull out real texture you can judge fit against. Best career and will it make me rich only get someone's opinion.",
          ask: "Let us ask better questions. Tap a question, then tap real insight or just an opinion. Start with the one about a normal week.",
          hints: [
            "Real insight asks what the day actually feels like.",
            "Best or richest questions only get a personal opinion.",
            "Normal week and hard parts give insight, best and richest give opinion."
          ]
        },
        {
          kind: "insight",
          body: "The best career research is a real conversation. Ask what an ordinary day looks like, and you learn what no brochure will tell you."
        }
      ],
      talkPrompt: "Help me prepare good questions to ask someone about their job or course."
    },
    {
      key: "pathfinder-6",
      title: "Keep Your Options Open",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Next step, not final destination",
          body: "You do not need your whole life mapped out at 15. Direction gets clearer as you learn more about yourself and the world. The calm goal is to choose a good next step and keep enough doors open to adjust later."
        },
        {
          kind: "choice",
          question: "You feel pressure to have your entire career mapped out now. What is the wiser frame?",
          options: [
            "Decide everything today and never change",
            "Choose a good next step and keep learning what fits",
            "Refuse to choose anything at all",
            "Copy whatever pays most and ignore fit"
          ],
          correct: 1,
          explain: "Picking a solid next step while staying open lets you adjust as you learn about yourself. Locking in everything now, or refusing to choose anything, both ignore that direction gets clearer with experience."
        },
        {
          kind: "reveal",
          prompt: "What is one good next step you could take without it locking in your whole future?",
          answer: "Maybe a subject combination, a taster course, or a chat with someone in a field. Small steps gather information while keeping your later choices open."
        },
        {
          kind: "order",
          prompt: "Put the keep your options open approach into a calm order.",
          items: [
            "Choose one good next step",
            "Try it and learn what fits you",
            "Keep some doors open on purpose",
            "Adjust as the path gets clearer"
          ],
          explain: "You pick a solid next step, learn from trying it, keep some doors open, then adjust. Direction gets clearer with experience, so you move forward without locking everything in.",
          ask: "Let us plan without the pressure. Drag these into a calm order. Start with the one move you actually make now.",
          hints: [
            "You begin by choosing a single next step, not your whole life.",
            "You learn what fits only by trying something.",
            "Choose a step, try it, keep doors open, then adjust."
          ]
        },
        {
          kind: "insight",
          body: "You are choosing a next step, not signing your whole life away. Move forward, stay curious, and let the path clarify as you go."
        }
      ],
      talkPrompt: "Help me pick a good next step for my studies while keeping my future options open."
    }
  ],
  adulting: [
    {
      key: "adulting-3",
      title: "Kitchen Safety Basics",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Heat, oil, and blades",
          body: "Cooking is a great life skill, and a few safety habits keep it fun instead of dangerous. Keep pot handles turned inward, cut away from your fingers, and never leave hot oil unattended. Knowing what to do if oil catches fire matters most."
        },
        {
          kind: "choice",
          question: "A small oil fire starts in a pan. What is the safe first move?",
          options: [
            "Throw water onto it",
            "Turn off the heat and cover the pan with a lid to smother it",
            "Carry the flaming pan to the sink",
            "Fan it to try to cool it down"
          ],
          correct: 1,
          explain: "Cutting the heat and smothering the flames with a lid removes the oxygen the fire needs, safely. Water on an oil fire makes it flare up violently, and moving or fanning it only spreads the flames."
        },
        {
          kind: "reveal",
          prompt: "Why is water the worst choice on an oil fire specifically?",
          answer: "Water sinks under the hot oil, flashes to steam, and throws burning oil upward and outward. That is exactly why a lid, not water, is the go to for an oil fire."
        },
        {
          kind: "match",
          prompt: "Match each response to an oil fire with whether it is safe or dangerous.",
          pairs: [
            { left: "Turn off the heat and cover with a lid", right: "Safe" },
            { left: "Throw water onto it", right: "Dangerous" },
            { left: "Carry the flaming pan to the sink", right: "Dangerous" },
            { left: "Fan it to cool it down", right: "Dangerous" }
          ],
          explain: "Cutting the heat and covering the pan smothers the fire safely. Water makes it flare up, and moving or fanning the pan only spreads the flames.",
          ask: "Let us handle the fire safely. Tap a response, then tap safe or dangerous. Start with the one that removes the flame's oxygen.",
          hints: [
            "The safe move takes away the fire's air and heat.",
            "Water and movement both make an oil fire worse.",
            "Lid and heat off is safe, water, carrying and fanning are dangerous."
          ]
        },
        {
          kind: "insight",
          body: "The kitchen is safe when you respect heat and oil. For an oil fire, cut the heat and cover the pan, never reach for water."
        }
      ],
      talkPrompt: "Quiz me on basic kitchen safety so I feel confident cooking simple meals at home."
    },
    {
      key: "adulting-4",
      title: "Laundry Without Ruining It",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Sort before you wash",
          body: "Laundry disasters mostly come from skipping one step: sorting. Keep strong colours away from whites, check the care label for temperature, and wash most everyday clothes on cold to be safe. A minute of sorting saves a pink shirt later."
        },
        {
          kind: "choice",
          question: "You have a new red shirt and some white socks. What is the safe wash?",
          options: [
            "Wash them together in hot water",
            "Wash the red separately at first, since colours can bleed onto whites",
            "Skip washing and just spray some perfume",
            "Bleach everything together to be safe"
          ],
          correct: 1,
          explain: "New bright colours can bleed, so washing the red apart protects your whites from turning pink. A hot mixed wash invites the bleed, and bleaching colours simply ruins them."
        },
        {
          kind: "reveal",
          prompt: "Where on a piece of clothing do you find how hot to wash it?",
          answer: "On the care label, usually inside the collar or side seam. Those little symbols tell you the safe temperature and whether it can go in a dryer at all."
        },
        {
          kind: "order",
          prompt: "Put a safe laundry routine into order.",
          items: [
            "Sort strong colours away from whites",
            "Check the care label for temperature",
            "Wash new bright colours separately",
            "Use a cool wash to be safe"
          ],
          explain: "You sort colours, read the care label, keep new brights apart, then wash cool. A minute of sorting up front is what saves a white shirt from turning pink.",
          ask: "Let us protect your clothes. Drag these into a safe order. Start with the sorting step that prevents most disasters.",
          hints: [
            "Most laundry disasters come from skipping the sorting.",
            "The care label tells you the safe temperature.",
            "Sort, check the label, keep brights apart, wash cool."
          ]
        },
        {
          kind: "insight",
          body: "Good laundry is mostly good sorting. Separate strong colours, check the label, and wash cool, and your clothes last far longer."
        }
      ],
      talkPrompt: "Walk me through sorting and washing a real pile of laundry without wrecking anything."
    },
    {
      key: "adulting-5",
      title: "A Budget for an Outing",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Plan the whole day",
          body: "A fun day out goes sideways when the money runs out halfway. The fix is a quick plan before you leave: rough amounts for transport, food, the main activity, and a small buffer for surprises. Then you can relax and enjoy it."
        },
        {
          kind: "choice",
          question: "You have 30 dollars for a day out. Which plan is safest?",
          options: [
            "Spend all 30 on the first fun thing you see",
            "Split it across transport, food, activity, and keep a small buffer",
            "Assume a friend will just cover you",
            "Bring no plan and simply hope it works out"
          ],
          correct: 1,
          explain: "Splitting the budget across transport, food, and a buffer means you can still get home and handle a surprise cost. Blowing it all early, or relying on others, can leave you stranded or awkward."
        },
        {
          kind: "reveal",
          prompt: "Out of 30 dollars, how much would you set aside just to make sure you can get home?",
          answer: "Protect your return fare first, whatever it costs, before anything fun. Getting home is the one expense you cannot skip, so it comes off the top."
        },
        {
          kind: "order",
          prompt: "Put the day out budget into the order that keeps you covered.",
          items: [
            "Set aside your fare home first",
            "Budget for food during the day",
            "Budget for the main activity",
            "Keep a small buffer for surprises"
          ],
          explain: "You protect the fare home first, then plan food and the activity, then hold back a buffer. Getting home is the one cost you cannot skip, so it comes off the top.",
          ask: "Let us plan the day so you are never stranded. Drag these into the order that keeps you covered. Start with the cost you must never lose.",
          hints: [
            "One expense you can never skip is getting home.",
            "Protect the essentials before the fun.",
            "Fare home first, then food, then activity, then a buffer."
          ]
        },
        {
          kind: "insight",
          body: "A little planning buys you a stress free day. Split the budget, protect your fare home, and keep a buffer for the unexpected."
        }
      ],
      talkPrompt: "Help me build a simple budget for a day out with friends on a fixed amount."
    },
    {
      key: "adulting-6",
      title: "Being On Time",
      minutes: 4,
      steps: [
        {
          kind: "concept",
          heading: "Plan backwards, add buffer",
          body: "Being on time is a skill, not a personality trait. The method is to plan backwards from when you must arrive, then add a buffer for the delays that always happen: a late train, a long queue, a slow lift. Buffer is what turns nearly on time into on time."
        },
        {
          kind: "choice",
          question: "You need to reach town by 2pm and the trip takes 40 minutes. When should you leave?",
          options: [
            "At exactly 1:20, timed to the minute",
            "Around 1:00, leaving a buffer for delays",
            "At 1:50 and then rush the whole way",
            "Whenever you happen to feel like it"
          ],
          correct: 1,
          explain: "Leaving around 1:00 gives a buffer that absorbs the normal delays, so you still arrive on time. Timing to the exact minute leaves no room the moment anything slips, and slips are normal."
        },
        {
          kind: "reveal",
          prompt: "Think of a time you were late. What one buffer would have saved you?",
          answer: "Usually it is leaving ten or fifteen minutes earlier, or checking the train timing first. A small buffer costs you a short wait but saves you the stress of rushing."
        },
        {
          kind: "order",
          prompt: "Put the plan backwards method for being on time into order.",
          items: [
            "Note the time you must arrive",
            "Count back the travel time",
            "Add a buffer for the usual delays",
            "Leave at that earlier time"
          ],
          explain: "You start from the arrival time, subtract the travel time, add a buffer for delays, then leave at that time. The buffer is what turns nearly on time into reliably on time.",
          ask: "Let us build the on time habit. Drag these into order, planning backwards. Start from the moment you have to be there.",
          hints: [
            "You plan backwards, so begin at the arrival time.",
            "Take off travel time before you add anything.",
            "Arrival time, minus travel, plus buffer, then leave."
          ]
        },
        {
          kind: "insight",
          body: "On time is planned, not lucky. Work backwards from your arrival, add a buffer for delays, and let early be your normal."
        }
      ],
      talkPrompt: "Help me plan backwards from an appointment so I build the habit of arriving on time."
    }
  ]
};
