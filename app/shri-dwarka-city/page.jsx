// app/shri-dwarka-city/page.jsx
// Server component: safely renders ExpresswayBlog (uses MongoDB)
// and passes it to the client component as a prop.

import ShriDwarkaClient from "./ShriDwarkaClient";
import ExpresswayBlog from "../../components/ExpresswayBlog";

export const revalidate = 3600;

export default function ShriDwarkaCityPage() {
  return <ShriDwarkaClient blogSection={<ExpresswayBlog />} />;
}