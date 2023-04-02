import { NFTCard } from "@/components/NFTCard";
import PageLayout from "@/layouts/PageLayout";

export default function Mint() {
  return (
    <PageLayout title="Mint">
      <div className=" py-20 px-8 flex flex-col gap-6 text-center">
        <NFTCard />
      </div>
    </PageLayout>
  );
}
