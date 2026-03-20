import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

export default function PDFViewer({ url }: { url: string }) {
  const [numPages, setNumPages] = useState<number>(0)

  return (
    <div className="w-full overflow-auto" style={{ border: '1px solid #2A2A2A', borderRadius: '12px' }}>
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        {Array.from(new Array(numPages), (_, i) => (
          <Page
            key={i + 1}
            pageNumber={i + 1}
            width={Math.min(window.innerWidth - 120, 900)}
          />
        ))}
      </Document>
    </div>
  )
}