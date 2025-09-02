import { CommandHandler } from "./commandHandler";
import { setUser } from "./config";

export const handlerLogin: CommandHandler = (cmdName: string, ...args: string[]) => {
    if (args.length === 0) {
        throw new Error("login handler expects a single argument, the username");
        
    }
    setUser(args[0]);
    console.log(`User has been set with the username: ${args[0]}`);


}