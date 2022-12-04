import type { PropsWithChildren } from "react";

export function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <div className="md:mx-auto md:container md:px-36 my-3">
      <div className="border-2 border-solid border-black">{children}</div>
    </div>
  );
}
