import { useState, useMemo } from 'react';
import { chapter1 } from './data/chapter1';
import { chapter2 } from './data/chapter2';
import { chapter3 } from './data/chapter3';
import { chapter4 } from './data/chapter4';
import { chapter5 } from './data/chapter5';
import { chapter6 } from './data/chapter6';
import { chapter7 } from './data/chapter7';
import { chapter8 } from './data/chapter8';
import { chapter9 } from './data/chapter9';
import { chapter10 } from './data/chapter10';
import { chapter11 } from './data/chapter11';

const chapters = [
  chapter1, chapter2, chapter3, chapter4, chapter5, chapter6,
  chapter7, chapter8, chapter9, chapter10, chapter11
];

export default function App() {
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [filterType, setFilterType] = useState('All');
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});

  const toggle = (id) => setExpanded((p) => ({ ...p, [id]: !p[id] }));

  const totalQuestions = useMemo(
    () => chapters.reduce((sum, c) => sum + c.questions.length, 0),
    []
  );

  // ============= HOME VIEW =============
  if (!selectedChapter) {
    return (
      <div style={{
        minHeight: '100vh',
        background: '#f7f5f0',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#1a1a1a',
        padding: '24px 16px'
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <header style={{ marginBottom: 32, textAlign: 'center' }}>
            <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 8 }}>
              Chemistry XI Question Bank
            </h1>
            <p style={{ fontSize: 14, color: '#666' }}>
              Lalitpur HISSAN Practice Book-2082 (Set 1–7) + HISSAN 2081 Set A & B
            </p>
            <p style={{ fontSize: 13, color: '#888', marginTop: 4 }}>
              {totalQuestions} questions across {chapters.length} chapters · MCQs, Short Answers, Long Answers
            </p>
          </header>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 12
          }}>
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedChapter(c)}
                style={{
                  background: c.light,
                  border: `1px solid ${c.color}33`,
                  borderRadius: 12,
                  padding: 16,
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  transition: 'transform 0.1s',
                  fontFamily: 'inherit'
                }}
                onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
                onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <div style={{ fontSize: 26 }}>{c.icon}</div>
                <div style={{
                  fontSize: 11,
                  fontWeight: 600,
                  color: c.color,
                  textTransform: 'uppercase',
                  letterSpacing: 0.5
                }}>
                  Chapter {c.id}
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, lineHeight: 1.3 }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 12, color: '#666' }}>
                  {c.questions.length} questions
                </div>
              </button>
            ))}
          </div>

          <footer style={{ marginTop: 40, textAlign: 'center', fontSize: 12, color: '#999' }}>
            Made for Class 11 chemistry students · Tap a chapter to see all questions and step-by-step solutions
          </footer>
        </div>
      </div>
    );
  }

  // ============= CHAPTER DETAIL VIEW =============
  const filtered = selectedChapter.questions.filter((q) => {
    if (filterType !== 'All' && q.type !== filterType) return false;
    if (search) {
      const s = search.toLowerCase();
      return (
        q.q.toLowerCase().includes(s) ||
        (q.answer || '').toLowerCase().includes(s) ||
        (q.source || '').toLowerCase().includes(s)
      );
    }
    return true;
  });

  const counts = {
    All: selectedChapter.questions.length,
    MCQ: selectedChapter.questions.filter((q) => q.type === 'MCQ').length,
    Short: selectedChapter.questions.filter((q) => q.type === 'Short').length,
    Long: selectedChapter.questions.filter((q) => q.type === 'Long').length
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: '#f7f5f0',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      color: '#1a1a1a'
    }}>
      {/* Header */}
      <div style={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        background: selectedChapter.light,
        borderBottom: `1px solid ${selectedChapter.color}33`,
        padding: '16px 16px 12px'
      }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <button
            onClick={() => { setSelectedChapter(null); setFilterType('All'); setSearch(''); }}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontSize: 13, color: selectedChapter.color, marginBottom: 8,
              padding: 0, fontFamily: 'inherit', fontWeight: 600
            }}
          >
            ← All chapters
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
            <div style={{ fontSize: 28 }}>{selectedChapter.icon}</div>
            <div>
              <div style={{ fontSize: 11, color: selectedChapter.color, fontWeight: 600, textTransform: 'uppercase' }}>
                Chapter {selectedChapter.id}
              </div>
              <h2 style={{ fontSize: 20, fontWeight: 700, lineHeight: 1.2 }}>
                {selectedChapter.name}
              </h2>
            </div>
          </div>

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search questions, answers, source..."
            style={{
              width: '100%',
              padding: '10px 14px',
              border: `1px solid ${selectedChapter.color}44`,
              borderRadius: 8,
              fontSize: 14,
              background: 'white',
              fontFamily: 'inherit',
              boxSizing: 'border-box',
              marginBottom: 10
            }}
          />

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['All', 'MCQ', 'Short', 'Long'].map((t) => (
              <button
                key={t}
                onClick={() => setFilterType(t)}
                style={{
                  background: filterType === t ? selectedChapter.color : 'white',
                  color: filterType === t ? 'white' : selectedChapter.color,
                  border: `1px solid ${selectedChapter.color}`,
                  borderRadius: 16,
                  padding: '6px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                {t} ({counts[t]})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Questions */}
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '16px' }}>
        {filtered.length === 0 ? (
          <div style={{ padding: 40, textAlign: 'center', color: '#888' }}>
            No questions match your filter.
          </div>
        ) : (
          filtered.map((q, idx) => (
            <div
              key={q.id}
              style={{
                background: 'white',
                borderRadius: 12,
                padding: 16,
                marginBottom: 10,
                border: '1px solid #eee'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                <span style={{
                  background: selectedChapter.color,
                  color: 'white',
                  padding: '3px 8px',
                  borderRadius: 10,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 0.5
                }}>
                  {q.type.toUpperCase()}
                </span>
                <span style={{ fontSize: 11, color: '#999' }}>
                  Q{idx + 1} · {q.source}
                </span>
              </div>

              <div style={{ fontSize: 14, lineHeight: 1.5, marginBottom: 10, whiteSpace: 'pre-wrap' }}>
                {q.q}
              </div>

              {q.options && (
                <div style={{ marginBottom: 10 }}>
                  {q.options.map((opt, i) => (
                    <div key={i} style={{
                      fontSize: 13,
                      padding: '4px 8px',
                      color: '#555'
                    }}>
                      {opt}
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={() => toggle(q.id)}
                style={{
                  background: selectedChapter.light,
                  color: selectedChapter.color,
                  border: 'none',
                  borderRadius: 6,
                  padding: '6px 12px',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  fontFamily: 'inherit'
                }}
              >
                {expanded[q.id] ? '▲ Hide solution' : '▼ Show answer & solution'}
              </button>

              {expanded[q.id] && (
                <div style={{ marginTop: 10, padding: 12, background: selectedChapter.light, borderRadius: 8 }}>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 700, color: selectedChapter.color, textTransform: 'uppercase' }}>
                      Answer:
                    </span>
                    <div style={{ fontSize: 14, fontWeight: 600, marginTop: 2 }}>
                      {q.answer}
                    </div>
                  </div>
                  <div>
                    <span style={{ fontSize: 11, fontWeight: 700, color: selectedChapter.color, textTransform: 'uppercase' }}>
                      Solution:
                    </span>
                    <div style={{
                      fontSize: 13,
                      lineHeight: 1.6,
                      marginTop: 4,
                      whiteSpace: 'pre-wrap',
                      color: '#333'
                    }}>
                      {q.solution}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}