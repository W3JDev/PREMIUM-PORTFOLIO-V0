"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock comments data
const comments = [
  {
    id: 1,
    author: "Alex Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "May 16, 2023",
    content:
      "This is exactly what I've been looking for! I've been struggling with inventory management at my café, and the EZX system approach sounds promising. Would love to see a follow-up article with more technical implementation details.",
    replies: [
      {
        id: 101,
        author: "MNJ",
        avatar: "/placeholder.svg?height=40&width=40",
        date: "May 16, 2023",
        content:
          "Thanks for your feedback, Alex! I'm planning a technical deep-dive for next month that will cover implementation specifics, including database structure and integration points.",
      },
    ],
  },
  {
    id: 2,
    author: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    date: "May 17, 2023",
    content:
      "Great insights! We implemented a similar system at our restaurant chain last year and saw immediate improvements in staff scheduling efficiency. One challenge we faced was training staff on the new system - any tips on change management?",
    replies: [],
  },
]

export default function BlogComments() {
  const [newComment, setNewComment] = useState("")

  return (
    <div>
      <h3 className="text-2xl font-bold text-white mb-6">Discussion ({comments.length})</h3>

      <div className="mb-8">
        <Textarea
          placeholder="Share your thoughts..."
          className="w-full bg-muted border border-muted resize-none min-h-[120px]"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Post Comment</Button>
        </div>
      </div>

      <div className="space-y-8">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            suppressHydrationWarning
          >
            <div className="flex gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.author} />
                <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-white">{comment.author}</h4>
                  <span className="text-xs text-muted-foreground">{comment.date}</span>
                </div>

                <p className="text-muted-foreground">{comment.content}</p>

                <div className="mt-2 flex gap-4">
                  <button className="text-xs text-primary hover:text-primary/80 transition-colors">Reply</button>
                  <button className="text-xs text-muted-foreground hover:text-white transition-colors">Like</button>
                </div>

                {comment.replies.length > 0 && (
                  <div className="mt-4 pl-6 border-l border-muted space-y-4">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="flex gap-4">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={reply.avatar || "/placeholder.svg"} alt={reply.author} />
                          <AvatarFallback>{reply.author.charAt(0)}</AvatarFallback>
                        </Avatar>

                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-medium text-white">{reply.author}</h4>
                            <span className="text-xs text-muted-foreground">{reply.date}</span>
                          </div>

                          <p className="text-muted-foreground">{reply.content}</p>

                          <div className="mt-2 flex gap-4">
                            <button className="text-xs text-muted-foreground hover:text-white transition-colors">
                              Like
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
