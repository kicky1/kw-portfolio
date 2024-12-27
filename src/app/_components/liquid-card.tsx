
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export function LiquidCard({ title, children }: { title: string, children: React.ReactNode }) {  
    return (
      <div className="relative">
       <div className="flex">
        <div className="flex bg-muted w-32">
            <div className="flex-1 flex p-2 rounded-br-3xl bg-background justify-center items-center max-w-32">
              <div
                className="font-medium text-zinc-100 group text-muted-foreground hover:text-[#40ce9f] transition-colors"
              >
                <span>{title}</span>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col p-2 h-10 rounded-bl-none rounded-tl-3xl rounded-tr-3xl w-32 bg-muted"/>
        </div>
        <Card className="bg-muted relative border-none rounded-tr-none  py-6 ">
          <CardContent className="flex flex-col overflow-y-auto h-full px-0 mx-0">
            <ScrollArea className="h-[calc(100vh-26rem)]">
            {children}
            </ScrollArea>
            </CardContent>
        </Card>
      </div>
      
    )
  }