export default function PDFViewer({ url }: { url: string }) {
  return (
    <div style={{ border: '1px solid #2A2A2A', borderRadius: '12px', overflow: 'hidden' }}>
      <iframe
        src={url + '#toolbar=1&navpanes=1&scrollbar=1'}
        style={{ width: '100%', height: '900px', border: 'none' }}
        title="Research Paper"
      />
    </div>
  )
}