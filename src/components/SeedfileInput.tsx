const SeedfileInput = () => {
    return (
        <div>
<form action="/api/seeds/exams/upload" method="POST" encType="multipart/form-data">
  <input type="file" name="file" />
  <button type="submit">Upload</button>
</form>

            </div>
    )
}
export default SeedfileInput;