const questionnaire = [
{
  id: "money",
  title: "Money",
  icon: "💰",

  questions: [
    {
      id: "budget-flexibility",

      type: "single-choice",
      required: true,
      question:
        "The group finds a significantly better option that increases your share by around 10–15%. What would you do?",

      options: [
        "😊 I'd happily pay more.",
        "🙂 Depends on what's included.",
        "😐 I'd rather stay within budget.",
        "❌ I'd want a cheaper alternative."
      ]
    },

    {
      id: "spending-priority",

      type: "multi-select",
      required: false,
      maxSelections: 3,

      question:
        "If you had extra money, where would you spend it?",
      
      options: [
        "🍜 Food",
        "🏨 Accommodation",
        "🚕 Transport",
        "🎟 Activities",
        "🛍 Shopping",
        "📸 Experiences",
        "💰 I'd rather save it"
      ]
    },

    {
      id: "restaurant-bill",

      type: "single-choice",
      required: true,
      question:
        "If someone orders significantly more expensive food than everyone else...",

      options: [
        "Split equally anyway",
        "They should pay the difference",
        "Depends on the situation"
      ]
    },

    {
  id: "budget-flexibility2",
  type: "slider",
  required: true,
  question: "How flexible are you with your budget?",
  min: 0,
  max: 100,
  labels: [
    "Strict Budget",
    "Very Flexible"
  ]
},
{
  id: "activities",
  type: "tri-state",
  required: false,
  question: "How do you feel about these activities?",
  options: [
    "Beach",
    "Nightlife",
    "Shopping",
    "Museums",
    "Hiking"
  ]
}
  ]
},
  {
    id: "travel-style",
    title: "Travel Style",
    icon: "✈️",
    questions: [],
  },
  {
    id: "group-dynamics",
    title: "Group Dynamics",
    icon: "👥",
    questions: [],
  },
  {
    id: "food",
    title: "Food",
    icon: "🍜",
    questions: [],
  },
  {
    id: "photography",
    title: "Photography",
    icon: "📸",
    questions: [],
  },
  {
    id: "daily-routine",
    title: "Daily Routine",
    icon: "🌅",
    questions: [],
  },
  {
    id: "stress-handling",
    title: "Stress Handling",
    icon: "😌",
    questions: [],
  },
  {
    id: "deal-breakers",
    title: "Deal Breakers",
    icon: "🚫",
    questions: [],
  },
];

export default questionnaire;