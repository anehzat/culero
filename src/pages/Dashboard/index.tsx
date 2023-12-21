import { Home } from '@/components/Dashboard/Home'
import { JoinToday } from '@/components/Dashboard/JoinToday'
import { Mission } from '@/components/Dashboard/MIssion'
import { Why } from '@/components/Dashboard/Why'
import { FeedDetail } from '@/components/Feed/Detail'
import { How } from '@/components/How/How'

export const Dashboard = () => {
  return (
    <div className="bg-gradient-to-t from-[#3231b2ad] to-[#aeb3e97d]">
      <Home />
      <FeedDetail />
      <Why />
      <How />
      <Mission />
      <JoinToday />
    </div>
  )
}
