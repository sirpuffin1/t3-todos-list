import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { type RouterOutputs } from "~/utils/api";

type Note = RouterOutputs["note"]["getAll"][0];

const NoteCard = ({ note, onDelete }: { note: Note; onDelete: () => void }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  return <div>Enter</div>;
};

export default NoteCard;
