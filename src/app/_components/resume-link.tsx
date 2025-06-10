
export const ResumeLink = () => {
    return (
      <div className="mb-12 ml-6 flex">
        <div className="rounded-tl-0 rounded-tr-0 flex h-10 w-32 flex-1 flex-col rounded-bl-xl rounded-br-3xl bg-muted p-2" />
        <div className="flex w-40 bg-muted">
          <div className="flex max-w-40 flex-1 items-center justify-center rounded-tl-3xl bg-background p-2">
            <a
              href="https://drive.google.com/file/d/1fxRRycoylGbivwan87uc0_DQxF3i3G45/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group font-medium text-muted-foreground text-zinc-100 transition-colors hover:text-[#40ce9f]"
            >
              <span>Full Resume</span>
            </a>
          </div>
        </div>
      </div>
    );
  };