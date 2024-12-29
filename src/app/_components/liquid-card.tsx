import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

export function LiquidCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="flex">
        <div className="flex w-32 bg-muted">
          <div className="flex max-w-32 flex-1 items-center justify-center rounded-br-3xl bg-background p-2">
            <div className="group font-medium text-muted-foreground text-zinc-100 transition-colors hover:text-[#40ce9f]">
              <span>{title}</span>
            </div>
          </div>
        </div>
        <div className="flex h-10 w-32 flex-1 flex-col rounded-bl-none rounded-tl-3xl rounded-tr-3xl bg-muted p-2" />
      </div>
      <Card className="relative rounded-tr-none border-none bg-muted py-6">
        <CardContent className="mx-0 flex h-full flex-col overflow-y-auto px-0">
          <ScrollArea className="h-[calc(100vh-26rem)]">{children}</ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
