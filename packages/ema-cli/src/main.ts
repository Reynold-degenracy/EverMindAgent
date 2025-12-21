/**
 * The main entry point for the EMA CLI
 *
 * Multiple commands are registered by `cli.register(Command)` here.
 *
 * @example
 * ```shell
 * ema help
 * ```
 */

import { Cli, Builtins } from "clipanion";
import { ReplCommand } from "./repl";
import { SnapshotCreateCommand, SnapshotRestoreCommand } from "./db";

const [_node, _app, ...args] = process.argv;

const cli = new Cli({
  binaryLabel: `ema`,
  binaryName: `ema`,
  binaryVersion: `0.1.0`,
});

cli.register(ReplCommand);
cli.register(SnapshotCreateCommand);
cli.register(SnapshotRestoreCommand);
cli.register(Builtins.HelpCommand);
cli.register(Builtins.VersionCommand);
cli.runExit(args);
