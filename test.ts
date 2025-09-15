import { z } from "zod/v4";

const Player = z.object({
  username: z.string(),
  xp: z.number().default(100),
});

// extract the inferred type
type Player = z.infer<typeof Player>; // Player.parse(req.body) -> Player
type InputPlayer = z.input<typeof Player>; // <- req.body

// use it in your code
const player: InputPlayer = { username: "billie" };

const r = Player.parse(player); // ✅ OK

console.log(r);

// name, password
//////

// username, xp