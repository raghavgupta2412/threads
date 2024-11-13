import { UserButton } from "@clerk/nextjs";

export default function Page() {
  return (
    <main>
      <h1 className="head-text">
        <UserButton />
      </h1>
    </main>
  );
}
