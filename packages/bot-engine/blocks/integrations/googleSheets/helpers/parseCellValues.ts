import { Variable, Cell } from '@typebot.io/schemas'
<<<<<<< HEAD
import { parseVariables } from '../../../../variables/parseVariables'
=======
import { parseVariables } from '@typebot.io/variables/parseVariables'
>>>>>>> upstream/main

export const parseCellValues =
  (variables: Variable[]) =>
  (cells: Cell[]): { [key: string]: string } =>
    cells.reduce((row, cell) => {
      return !cell.column || !cell.value
        ? row
        : {
            ...row,
            [cell.column]: parseVariables(variables)(cell.value),
          }
    }, {})
