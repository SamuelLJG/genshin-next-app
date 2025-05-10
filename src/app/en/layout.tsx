import { getLangResolve } from "../contexts";
export default async function RootLayout({ children }: {children: React.ReactNode;}) {
const lang = "en"
getLangResolve()(lang);
  return (
    <>
        {children}
        </>
  );
}
