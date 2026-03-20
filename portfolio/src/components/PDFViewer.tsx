export default function PDFViewer({ url }: { url: string }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div style={{ background: '#1A1A1A', border: '1px solid #2A2A2A', borderRadius: '12px', padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem' }}>
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
          <div style={{ width: '48px', height: '60px', background: '#0d2a1a', border: '1px solid #10B981', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="1" width="12" height="16" rx="1" stroke="#10B981" strokeWidth="1.2"/>
              <path d="M14 1l4 4v14a1 1 0 01-1 1H5" stroke="#10B981" strokeWidth="1.2" fill="none"/>
              <line x1="5" y1="8" x2="11" y2="8" stroke="#10B981" strokeWidth="1" opacity="0.6"/>
              <line x1="5" y1="11" x2="11" y2="11" stroke="#10B981" strokeWidth="1" opacity="0.6"/>
              <line x1="5" y1="14" x2="9" y2="14" stroke="#10B981" strokeWidth="1" opacity="0.6"/>
            </svg>
          </div>
          <div>
            <p style={{ color: '#E8E8E8', fontSize: '15px', fontWeight: 500, margin: '0 0 6px' }}>Live Environment Object Recognition and Model Correspondence</p>
            <p style={{ color: '#A0A0A0', fontSize: '13px', margin: '0 0 4px' }}>Ho, Hus, Karthikeyan, Khankin</p>
            <p style={{ color: '#A0A0A0', fontSize: '12px', margin: '0 0 12px' }}>Michigan State University — Fall 2023</p>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{ background: '#022C22', color: '#10B981', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Computer Vision</span>
              <span style={{ background: '#022C22', color: '#10B981', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Object Detection</span>
              <span style={{ background: '#022C22', color: '#10B981', fontSize: '11px', padding: '3px 10px', borderRadius: '20px' }}>Keypoint Matching</span>
            </div>
          </div>
        </div>
        <a href={url} target="_blank" rel="noreferrer" style={{ background: '#10B981', color: '#022C22', fontSize: '13px', fontWeight: 500, padding: '10px 24px', borderRadius: '8px', textDecoration: 'none', whiteSpace: 'nowrap', flexShrink: 0 }}>
          Read paper ↗
        </a>
      </div>

      <iframe
        src={url}
        style={{ width: '100%', height: '900px', border: '1px solid #2A2A2A', borderRadius: '12px' }}
        title="Research Paper"
      />
    </div>
  )
}