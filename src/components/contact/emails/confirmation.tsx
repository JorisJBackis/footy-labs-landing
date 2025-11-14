import {Html, Head, Tailwind, Body, Container, Text, Heading, Link, Img} from '@react-email/components'
import { pixelBasedPreset } from "@react-email/tailwind"

export const FootyLabsConfirmationMessage = ({ name }) => (
    <Html>
      <Head/>
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Body className="bg-white font-sans">
          <Container className="mx-auto my-0 max-w-[560px] px-4 py-8">
            {/*<Img*/}
            {/*    src={`https://jbqljjyctbsyawijlxfa.supabase.co/storage/v1/object/public/footylabs-logo/logo.png`}*/}
            {/*    width="100"*/}
            {/*    height="auto"*/}
            {/*    alt="Footy labs"*/}
            {/*    className="w-[42px] h-auto"*/}
            {/*/>*/}
            <Heading className="text-[20px] text-gray-800 mb-4 pt-[17px]">Hi {name},</Heading>
            <Text className="text-gray-700 text-[16px] mb-4">
              Thanks for reaching out! We’ve received your message and will get back to you shortly.
            </Text>
            <Text className="text-gray-700 text-[16px] mb-6">
              - The Footy Labs Team
            </Text>
            <Link href="https://footylabs.ai" className="text-blue-600 text-[14px]">
              Visit Footy Labs
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
)
