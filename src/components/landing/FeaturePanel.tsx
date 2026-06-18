import FeatureCard from "./FeatureCard";

export default function FeaturePanel() {
  return (
    <div className="space-y-5">

      <FeatureCard
        emoji="📦"
        title="Active Batches"
        description="Discover what's open now"
      />

      <FeatureCard
        emoji="🩷"
        title="My Orders"
        description="Every order in one place"
      />

      <FeatureCard
        emoji="💳"
        title="Payments"
        description="Verified & organized"
      />

      <FeatureCard
        emoji="🚚"
        title="Shipment Updates"
        description="From checkout to home"
      />

    </div>
  );
}