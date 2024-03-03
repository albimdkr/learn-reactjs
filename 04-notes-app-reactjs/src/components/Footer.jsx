export default function Footer({items}){
  // Hack || Guard || Block if Items are empty
  if (items.length === 0) return (
    <footer className="stats">
      Daftar item belum terisi!
    </footer>
  );

  const totalItems = items.length;
  const checkedItems = items.filter((item) => item.checked).length;
  const percentageProgress = Math.round((checkedItems / totalItems) * 100);

  return (
    <footer className="stats">
      Ada {totalItems} barang di daftar belanjaan, {checkedItems} barang sudah dibeli ({percentageProgress}%)
    </footer>
  );
}