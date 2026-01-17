import { 
  FileText, 
  File, 
  FileImage, 
  Code2, 
  Link as LinkIcon,
  LucideIcon
} from "lucide-react";

export interface ToolCategory {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  href: string;
  toolCount: number;
}

export const TOOL_CATEGORIES: ToolCategory[] = [
  {
    id: "text-tools",
    name: "Text Tools",
    description: "Word counter, case converter, diff checker, and more",
    icon: FileText,
    href: "/tools/text-tools",
    toolCount: 5,
  },
  {
    id: "pdf-tools",
    name: "PDF Tools",
    description: "Merge, split, compress, and convert PDFs",
    icon: File,
    href: "/tools/pdf-tools",
    toolCount: 5,
  },
  {
    id: "image-tools",
    name: "Image Tools",
    description: "Resize, compress, convert, and crop images",
    icon: FileImage,
    href: "/tools/image-tools",
    toolCount: 5,
  },
  {
    id: "developer-tools",
    name: "Developer Tools",
    description: "JSON formatter, Base64, UUID, hash generator",
    icon: Code2,
    href: "/tools/developer-tools",
    toolCount: 5,
  },
  {
    id: "url-tools",
    name: "URL Tools",
    description: "QR codes, URL encoder, UTM builder, slug generator",
    icon: LinkIcon,
    href: "/tools/url-tools",
    toolCount: 5,
  },
];