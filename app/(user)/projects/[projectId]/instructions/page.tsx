import CopyBtn from "@/components/copy-btn";

const page = ({
  params
}: {
  params: { projectId: string }
}) => {
  if (!params.projectId) return (<div>Invalid Project ID</div>);
  if (!process.env.WIDGET_URL) return (<div>Missing WIDGET_URL</div>);

  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Start Collecting Feedback</h1>
      <p className="text-lg text-secondary-foreground">Embed the code in our site</p>

      <div className="bg-blue-950 p-6 rounded-md relative">
        <code className="text-white">
          {/* {`<script src=https:/>/feedback.example.com/feedback.js></script>`}
          {`<script>Feedback.init("${params.projectId}")</script>`} */}
          {`<my-widget project="${params.projectId}"></my-widget>`}
          <br />
          {`<script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        </code>

        <CopyBtn
          text={`<my-widget project="${params.projectId}"></my-widget>\n
          <script src="${process.env.WIDGET_URL}/widget.umd.js"></script>`}
        />
      </div>
    </div>
  )
}

export default page;