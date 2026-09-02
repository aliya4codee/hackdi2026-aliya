import { createFileRoute, useRouter } from '@tanstack/react-router'
import { useState } from 'react'
import type { FormEvent } from 'react'

import { createTask, deleteTask, listTasks, toggleTask, updateTask, type Task } from '../tasks'

export const Route = createFileRoute('/')({
  loader: () => listTasks(),
  component: Home,
})

function Home() {
  const tasks = Route.useLoaderData()
  const router = useRouter()
  const [newTitle, setNewTitle] = useState('')
  const [editingId, setEditingId] = useState<number | null>(null)
  const [editingTitle, setEditingTitle] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [isSaving, setIsSaving] = useState(false)

  async function refresh() {
    await router.invalidate()
  }

  async function runMutation(action: () => Promise<unknown>) {
    setError(null)
    setIsSaving(true)
    try {
      await action()
      await refresh()
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSaving(false)
    }
  }

  function handleCreate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    void runMutation(async () => {
      await createTask({ data: { title: newTitle } })
      setNewTitle('')
    })
  }

  function startEditing(task: Task) {
    setError(null)
    setEditingId(task.id)
    setEditingTitle(task.title)
  }

  function handleEdit(event: FormEvent<HTMLFormElement>, id: number) {
    event.preventDefault()
    void runMutation(async () => {
      await updateTask({ data: { id, title: editingTitle } })
      setEditingId(null)
      setEditingTitle('')
    })
  }

  return (
    <main className="page-shell">
      <section className="task-card" aria-labelledby="page-title">
        <p className="eyebrow">HackDI starter</p>
        <h1 id="page-title">Tiny Task List</h1>
        <p className="intro">A TanStack Start route, a Cloudflare Worker, and a D1 database in one small app.</p>
        <p className="public-note"><strong>Workshop note:</strong> this list is public and anyone with the link can edit it.</p>

        <form className="new-task-form" onSubmit={handleCreate}>
          <label htmlFor="new-task">What needs doing?</label>
          <div className="form-row">
            <input
              id="new-task"
              value={newTitle}
              onChange={(event) => setNewTitle(event.target.value)}
              maxLength={120}
              placeholder="Ship a hackathon project"
              disabled={isSaving}
            />
            <button type="submit" disabled={isSaving}>Add task</button>
          </div>
        </form>

        {error ? <p className="error" role="alert">{error}</p> : null}

        {tasks.length === 0 ? (
          <p className="empty-state">No tasks yet. Add the first one above.</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <li className="task-row" key={task.id}>
                {editingId === task.id ? (
                  <form className="edit-form" onSubmit={(event) => handleEdit(event, task.id)}>
                    <input
                      aria-label="Edit task title"
                      autoFocus
                      value={editingTitle}
                      onChange={(event) => setEditingTitle(event.target.value)}
                      maxLength={120}
                      disabled={isSaving}
                    />
                    <button type="submit" disabled={isSaving}>Save</button>
                    <button type="button" className="button-secondary" onClick={() => setEditingId(null)} disabled={isSaving}>Cancel</button>
                  </form>
                ) : (
                  <>
                    <label className="task-label">
                      <input
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => void runMutation(() => toggleTask({ data: { id: task.id, completed: !task.completed } }))}
                        disabled={isSaving}
                      />
                      <span className={task.completed ? 'completed' : undefined}>{task.title}</span>
                    </label>
                    <div className="task-actions">
                      <button type="button" className="button-secondary" onClick={() => startEditing(task)} disabled={isSaving}>Edit</button>
                      <button type="button" className="button-danger" onClick={() => void runMutation(() => deleteTask({ data: { id: task.id } }))} disabled={isSaving}>Delete</button>
                    </div>
                  </>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  )
}
