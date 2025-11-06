import {StaggeredBlurText} from "@/components/text";
import {splitBySpace} from "@/lib/utils";

export function UnderDevelopment() {
  return (
      <section className={`container overflow-hidden `}>
        <h1>
          <StaggeredBlurText textArr={'This page is under development.'
              .split(" ")
              .map(text => text + ' ')}>
          </StaggeredBlurText>
        </h1>
        <h2>
          <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={0.1 + 0.2 + 0.3}
          >
          </StaggeredBlurText>
        </h2>
        <h3>
          <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={(0.1 + 0.2 + 0.3) * 2}
          >
          </StaggeredBlurText>
        </h3>
        <h4>      <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={(0.1 + 0.2 + 0.3) * 3}
          >
          </StaggeredBlurText></h4>
        <h5>      <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={(0.1 + 0.2 + 0.3) * 4}
          >
          </StaggeredBlurText></h5>
        <h6>      <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={(0.1 + 0.2 + 0.3) * 5}
          >
          </StaggeredBlurText></h6>
        <p>      <StaggeredBlurText
              textArr={splitBySpace('This page is under development.')}
              initDelay={(0.1 + 0.2 + 0.3) * 6}
          >
          </StaggeredBlurText></p>
      </section>
  )
}