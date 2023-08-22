import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NavigationMenuIndicator } from "@/components/ui/navigation-menu";
import { getAllNotes, getAllTodos, getAuthStatus, logout } from "@/lib/utils";
import { todo } from "@/types";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";
import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";

type note = {
  title: string;
  description: string;
  completed: boolean;
  dateCreated: string;
  dateUpdated: string;
  body: string;
  id: string;
};

type notes = note[];

export default async function DashboardIndex() {
  const token = cookies().get("token");
  const userNote = await getAllNotes(token);
  const userTodos = await getAllTodos(token);
  const notes = userNote.notes as notes;
  const todos = userTodos.todos as todo[];
  return (
    <>
      <main className="w-screen flex flex-col gap-3 h-screen min-h-screen">
        <div className="flex flex-col gap-2">
          <div className="p-3">
            <header>
              <nav>
                <Link href="/">
                  <ArrowLeftIcon className="text-2xl" />
                </Link>
              </nav>
            </header>
          </div>
          <div className="grid gap-2 grid-cols-2 md:grid-cols-3 w-full p-5">
            <div className="w-full">
              {Array.isArray(userNote.notes) &&
                notes?.map((note) => (
                  <Card className="h-48">
                    <CardHeader>
                      <CardTitle>{note.title}</CardTitle>
                      <CardDescription>{note.description}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>

                    <CardFooter className="">
                      <Button variant={"link"}>
                        <Link href={`/user/notes/${note.id}`}>Details</Link>
                      </Button>
                      <small className="text-gray-400">notes</small>
                    </CardFooter>
                  </Card>
                ))}
            </div>
            <div>
              {Array.isArray(userTodos.todos) && userTodos.todos.length === 0
                ? "There is no todos"
                : todos?.map((todo) => (
                    <Card className="h-48">
                      <CardHeader>
                        <CardTitle>{todo.title}</CardTitle>
                        <CardDescription>{todo.description}</CardDescription>
                      </CardHeader>
                      <CardContent></CardContent>
                      <CardFooter>
                        <Button variant={"link"}>
                          <Link href={`/user/todos/${todo.id}`}>Details </Link>
                        </Button>
                        <small className="text-gray-400">todos</small>
                      </CardFooter>
                    </Card>
                  ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
