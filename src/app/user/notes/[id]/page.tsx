import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getNotesById } from "@/lib/utils";
import { cookies } from "next/dist/client/components/headers";
import Link from "next/link";
type params = {
  id: string;
};
export default async function NoteByIdPage({ params }: { params: params }) {
  const token = cookies().get("token");
  const note = await getNotesById(token, params.id);
  return (
    <Card>
      <CardHeader>
        <CardTitle>{note?.title}</CardTitle>
        <CardDescription>{note?.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{note?.body}</p>
      </CardContent>
      <CardFooter className="">
        <Button variant={"link"}>
          <Link href={`/user/notes/${note?.id}`}>Details</Link>
        </Button>
        <small className="text-gray-400">notes</small>
      </CardFooter>
    </Card>
  );
}
