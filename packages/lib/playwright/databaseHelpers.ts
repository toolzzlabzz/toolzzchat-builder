import { createId } from "@paralleldrive/cuid2";
import {
  BlockV5,
  BlockV6,
  Group,
  PublicTypebot,
  Typebot,
  TypebotV6,
<<<<<<< HEAD
} from "@typebot.io/schemas";
import { isDefined } from "../utils";
import { proWorkspaceId } from "./databaseSetup";
import { InputBlockType } from "@typebot.io/schemas/features/blocks/inputs/constants";
import { EventType } from "@typebot.io/schemas/features/events/constants";

export const parseTestTypebot = (partialTypebot: Partial<Typebot>): Typebot => {
  const version = partialTypebot.version ?? ("3" as any);
=======
} from '@typebot.io/schemas'
import { isDefined } from '../utils'
import { proWorkspaceId } from './databaseSetup'
import { InputBlockType } from '@typebot.io/schemas/features/blocks/inputs/constants'
import { EventType } from '@typebot.io/schemas/features/events/constants'

export const parseTestTypebot = (partialTypebot: Partial<Typebot>): Typebot => {
  const version = partialTypebot.version ?? ('3' as any)
>>>>>>> upstream/main

  return {
    id: createId(),
    version,
    workspaceId: proWorkspaceId,
    folderId: null,
<<<<<<< HEAD
    name: "New Bot",
=======
    name: 'My typebot',
>>>>>>> upstream/main
    theme: {},
    settings: {},
    publicId: null,
    updatedAt: new Date(),
    createdAt: new Date(),
    customDomain: null,
    icon: null,
    selectedThemeTemplateId: null,
    isArchived: false,
    isClosed: false,
    resultsTablePreferences: null,
    whatsAppCredentialsId: null,
    riskLevel: null,
    events:
<<<<<<< HEAD
      version === "6"
        ? [
            {
              id: "group1",
              type: EventType.START,
              graphCoordinates: { x: 0, y: 0 },
              outgoingEdgeId: "edge1",
            },
          ]
        : null,
    variables: [{ id: "var1", name: "var1" }],
    ...partialTypebot,
    edges: [
      {
        id: "edge1",
        from: { blockId: "block0" },
        to: { groupId: "group1" },
      },
    ],
    groups: (version === "6"
      ? partialTypebot.groups ?? []
      : [
          {
            id: "group0",
            title: "Group #0",
            blocks: [
              {
                id: "block0",
                type: "start",
                label: "Start",
                outgoingEdgeId: "edge1",
=======
      version === '6'
        ? [
            {
              id: 'group1',
              type: EventType.START,
              graphCoordinates: { x: 0, y: 0 },
              outgoingEdgeId: 'edge1',
            },
          ]
        : null,
    variables: [{ id: 'var1', name: 'var1' }],
    ...partialTypebot,
    edges: [
      {
        id: 'edge1',
        from: { blockId: 'block0' },
        to: { groupId: 'group1' },
      },
    ],
    groups: (version === '6'
      ? partialTypebot.groups ?? []
      : [
          {
            id: 'group0',
            title: 'Group #0',
            blocks: [
              {
                id: 'block0',
                type: 'start',
                label: 'Start',
                outgoingEdgeId: 'edge1',
>>>>>>> upstream/main
              },
            ],
            graphCoordinates: { x: 0, y: 0 },
          },
          ...(partialTypebot.groups ?? []),
        ]) as any[],
<<<<<<< HEAD
  };
};
=======
  }
}
>>>>>>> upstream/main

export const parseTypebotToPublicTypebot = (
  id: string,
  typebot: Typebot
): Omit<PublicTypebot, "createdAt" | "updatedAt"> => ({
  id,
  version: typebot.version,
  groups: typebot.groups,
  typebotId: typebot.id,
  theme: typebot.theme,
  settings: typebot.settings,
  variables: typebot.variables,
  edges: typebot.edges,
  events: typebot.events,
<<<<<<< HEAD
});
=======
})
>>>>>>> upstream/main

type Options = {
  withGoButton?: boolean;
};

export const parseDefaultGroupWithBlock = (
  block: Partial<BlockV6>,
  options?: Options
<<<<<<< HEAD
): Pick<TypebotV6, "groups"> => ({
=======
): Pick<TypebotV6, 'groups'> => ({
>>>>>>> upstream/main
  groups: [
    {
      graphCoordinates: { x: 200, y: 200 },
      id: "group1",
      blocks: [
        options?.withGoButton
          ? {
              id: "block1",
              groupId: "group1",
              type: InputBlockType.CHOICE,
              items: [
                {
<<<<<<< HEAD
                  id: "item1",
                  blockId: "block1",
                  content: "Go",
=======
                  id: 'item1',
                  blockId: 'block1',
                  content: 'Go',
>>>>>>> upstream/main
                },
              ],
              options: {},
            }
          : undefined,
        {
<<<<<<< HEAD
          id: "block2",
          ...block,
        } as BlockV5,
      ].filter(isDefined) as BlockV6[],
      title: "Group #1",
=======
          id: 'block2',
          ...block,
        } as BlockV5,
      ].filter(isDefined) as BlockV6[],
      title: 'Group #1',
>>>>>>> upstream/main
    },
  ],
});
