import IconButton from "@/components/ui/IconButton";
import { MoonIcon, SunIcon } from "@/components/ui/InlineIcons";

type ThemeToggleProps = {
  onToggle: () => void;
};

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  return (
    <IconButton label="Toggle color theme" onClick={onToggle}>
      <MoonIcon size={20} className="dark:hidden" />
      <SunIcon size={20} className="hidden dark:block" />
    </IconButton>
  );
}
