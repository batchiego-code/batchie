export const batchStatusMap: Record<
  string,
  {
    label: string;
    color: string;
  }
> = {
  OPEN: {
    label: "🟢 Open",
    color: "bg-green-100 text-green-700",
  },

  ORDERED: {
    label: "🛒 Ordered",
    color: "bg-blue-100 text-blue-700",
  },

  SHIPPING_TO_WH: {
    label: "🚚 Shipping to Warehouse",
    color: "bg-orange-100 text-orange-700",
  },

  ARRIVED_WH: {
    label: "📦 Arrived at Warehouse",
    color: "bg-purple-100 text-purple-700",
  },

  SHIPPING_TO_INA: {
    label: "✈️ Shipping to Indonesia",
    color: "bg-cyan-100 text-cyan-700",
  },

  ARRIVED_INA: {
    label: "🇮🇩 Arrived in Indonesia",
    color: "bg-indigo-100 text-indigo-700",
  },

  ARRIVED_ADMIN: {
    label: "🏠 Arrived at Admin",
    color: "bg-pink-100 text-pink-700",
  },

  SHIPPED: {
    label: "📮 Shipped",
    color: "bg-yellow-100 text-yellow-700",
  },

  COMPLETED: {
    label: "✨ Completed",
    color: "bg-emerald-100 text-emerald-700",
  },

  CANCELLED: {
    label: "❌ Cancelled",
    color: "bg-red-100 text-red-700",
  },

  REFUNDED: {
    label: "💸 Refunded",
    color: "bg-zinc-100 text-zinc-700",
  },
};