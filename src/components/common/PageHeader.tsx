interface Props {
  title: string;
  subtitle?: string;
  children?: string;
}

const PageHeader = ({ title, subtitle, children }: Props) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl font-medium tracking-tight mb-2">{title}</h1>
        {subtitle && <p className="">{subtitle}</p>}
      </div>
      {children && <div>{children}</div>}
    </div>
  );
};

export default PageHeader;
