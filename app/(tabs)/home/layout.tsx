interface IHomeLayout {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function HomeLayout({ children, modal }: IHomeLayout) {
  return (
    <>
      {children}
      {modal}
    </>
  );
}
