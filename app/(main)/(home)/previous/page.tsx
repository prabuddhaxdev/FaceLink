import CallList from '@/components/CallList';

const Previous = () => {
  return (
    <section className="flex flex-col size-full gap-10  text-white">
      <h1 className="text-3xl font">Previous</h1>
      <CallList type="ended" />
    </section>
  );
}

export default Previous