import Image from "next/image";

interface ButtonProps {
  title: string;
  icon?: string;
  type?: 'button' | 'submit';
  varriant: string;
  full?: boolean
}

const Button = ({ title, icon, varriant, type = "button", full }: ButtonProps) => {
  return (
    <button type={type} className={`flexCenter gap-3 rounded-full border ${varriant} ${full && 'w-full'}`}>
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
