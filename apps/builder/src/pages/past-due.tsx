import { AlertIcon } from '@/components/icons'
import { BillingPortalButton } from '@/features/billing/components/BillingPortalButton'
import { DashboardHeader } from '@/features/dashboard/components/DashboardHeader'
import { useWorkspace } from '@/features/workspace/WorkspaceProvider'
import { Heading, VStack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Page() {
  const { replace } = useRouter()
  const { workspace } = useWorkspace()

  useEffect(() => {
    if (!workspace || workspace.isPastDue) return
    replace('/toolzz')
  }, [replace, workspace])

  return (
    <>
      <DashboardHeader />
      <VStack
        w="full"
        h="calc(100vh - 64px)"
        justifyContent="center"
        spacing={4}
      >
        <AlertIcon fontSize="4xl" />
        <Heading fontSize="2xl">Your workspace has unpaid invoice(s).</Heading>
        <Text>Head over to the billing portal to pay it.</Text>
        {workspace?.id && (
          <BillingPortalButton workspaceId={workspace?.id} colorScheme="blue" />
        )}
      </VStack>
    </>
  )
}
