interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor?: string;
  iconTextColor?: string;
}

export function SkillCard({
  icon,
  title,
  description,
  iconBgColor = "bg-[#D62828]",
  iconTextColor = "text-white",
}: SkillCardProps) {
  return (
    <div className="rounded-2xl border border-[#003049]/20 bg-[#F8F9FA] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColor} ${iconTextColor} text-xl font-bold`}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#003049]">{title}</h3>

      <p className="mt-3 leading-6 text-gray-600">{description}</p>
    </div>
  );
}