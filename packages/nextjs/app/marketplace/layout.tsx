import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Marketplace",
  description: "Buy Frosty Friends",
});

const MarketplaceLayout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default MarketplaceLayout;
