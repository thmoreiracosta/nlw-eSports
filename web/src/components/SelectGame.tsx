import * as Select from "@radix-ui/react-select";
import { Check } from "phosphor-react";

interface SelectGameProps {
  children: string[];
  games: string[];
}

export function SelectGame(props : SelectGameProps) {
  return (
    <Select.Root>
      <Select.Trigger>
        <Check />
      </Select.Trigger>
      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            <Select.Group>
              <Select.Label>Testedwqwdwqd</Select.Label>
              <Select.Item>{props.games}</Select.Item>
            
            </Select.Group>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}