import { useRef, useCallback, useEffect, PropsWithChildren, memo } from 'react'

type InfiniteScrollProps = {
  loading: boolean,
  hasMore: boolean,
  onLoadMore: () => void,
}

const InfiniteScroll = ({ loading, hasMore, onLoadMore, children }: PropsWithChildren<InfiniteScrollProps>) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;

    const container = containerRef.current;

    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;

      if (scrollHeight - scrollTop <= clientHeight * 1.5) {
        onLoadMore();
      }
    }
  }, [loading, hasMore, onLoadMore]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return (
    <div ref={containerRef} className="container mx-auto p-4 h-[80vh] overflow-y-auto">
      {children}
    </div>
  )
}

export default memo(InfiniteScroll)