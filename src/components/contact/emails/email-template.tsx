import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from '@react-email/components';
import {pixelBasedPreset} from "@react-email/tailwind";


export const FootyLabsContactMessage = ({
                                       name,
                                       email,
                                       message
                                     }) => (
    <Html>
      <Head/>
      <Tailwind
          config={{
            presets: [pixelBasedPreset],
            theme: {
              extend: {
                colors: {
                  brand: "oklch(0.4511 0.1570 271.6021)",
                },
              },
            },
          }}
      >
        <Body className="bg-white font-semibold">
          <Preview>New message via Footy Labs contact form</Preview>
          <Container className="mx-auto my-0 max-w-[560px] px-0 pt-5 pb-12">
            <Img
                src={`https://jbqljjyctbsyawijlxfa.supabase.co/storage/v1/object/public/footylabs-logo/logo.png`}
                width="200"
                height="auto"
                alt="Footy labs"
                className="w-[42px] h-auto"
            />
            <Heading
                className="text-[24px] tracking-[-0.5px] leading-[1.3] font-normal text-[#484848] pt-[17px] px-0 pb-0">
              New message via Footy Labs contact form
            </Heading>
            <Section className="bg-[#f8f8f8] p-4 rounded-lg my-6">
              <Text className="text-[14px] text-[#888] m-0">
                <span className="font-bold text-[#484848]">FROM:</span> {name}
              </Text>
              <Text className="text-[14px] text-[#888] m-0">
                <span className="font-bold text-[#484848]">EMAIL:</span> {email}
              </Text>
            </Section>

            <Heading className="text-[18px] font-semibold text-[#484848] pt-4 px-0 pb-2">
              Message Content:
            </Heading>
            <Text className="whitespace-pre-wrap leading-[1.6] text-[16px] text-[#3c4149] border border-l-4 border-gray-200 border-l-brand p-4 bg-gray-50">
              {message}
            </Text>

            <Hr className="border-[#dfe1e4] mt-[42px] mb-[26px]"/>
            <Link
                href="https://footylabs.ai"
                className="text-brand text-[14px]"
            >
              Footy Labs
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
);

export default FootyLabsContactMessage;
