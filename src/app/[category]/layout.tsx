type Props = {
  children: React.ReactNode;
  params: { category: string };
};

export default function CategoryLayout({ children, params }: Props) {
  return <div>{children}</div>;
}

