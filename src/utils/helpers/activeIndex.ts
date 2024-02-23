import { ChatMessageProps } from '@/components/bubblechat'

export const getMatchCounts = (
  messages: ChatMessageProps[],
  searchTerm: string,
): number[] => {
  return messages.map((chat) => {
    return (chat.message?.match(new RegExp(`\\b${searchTerm}\\b`, 'gi')) || [])
      .length
  })
}

export const getLocalActiveIndex = (
  activeIndex: number,
  matchCounts: number[],
  index: number,
): number => {
  const reversedMatchCounts = [...matchCounts].reverse()
  const reversedIndex = matchCounts.length - index - 1
  return activeIndex <
    reversedMatchCounts.slice(0, reversedIndex).reduce((a, b) => a + b, 0)
    ? -1
    : activeIndex -
        reversedMatchCounts.slice(0, reversedIndex).reduce((a, b) => a + b, 0)
}