import { HeaderVote } from "@/sections/Inicio/HeaderVote";
import PageLayout from "@/layouts/PageLayout";

export default function Vote() {
  return (
    <PageLayout title="Vote">
      <div className="w-full justify-center items-center flex ">
        <HeaderVote />
      </div>
    </PageLayout>
  );
}
