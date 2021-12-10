import { Group, Text, Button } from "@mantine/core";
import { useFullscreen } from "@mantine/hooks";

export default function Home() {
  const { toggle, fullscreen } = useFullscreen();

  return (
    <Group position='center' direction='column'>
      <Text size='xl' weight='bold'>mantine</Text>
      <Button onClick={toggle} color={fullscreen ? "red" : "blue"}>
        {fullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
      </Button>
    </Group>
  );
}
