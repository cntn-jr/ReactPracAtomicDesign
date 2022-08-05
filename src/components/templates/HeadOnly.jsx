import { Header } from "../atoms/layout/Header";

export const HeadOnly = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};
