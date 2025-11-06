import {StaggeredBlurText} from "@/components/text";

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
          <StaggeredBlurText textArr={'This page is under development.'
              .split(" ")
              .map(text => text + ' ')}
                             initDelay={0.1 + 0.2 + 0.3}
          >
          </StaggeredBlurText>
        </h2>
        <h3>
          <StaggeredBlurText textArr={'This page is under development.'
              .split(" ")
              .map(text => text + ' ')}
                             initDelay={(0.1 + 0.2 + 0.3)*2}
          >
          </StaggeredBlurText>
        </h3>
        <h4>This page is under development.</h4>
        <h5>This page is under development.</h5>
        <h6>This page is under development.</h6>
        <p>This page is under development.</p>
      </section>
  )
}