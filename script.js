function calculateMinCost(ropes) {
  //your code here
	const minHeap = new MinHeap(ropes);

  let totalCost = 0;

  while (minHeap.getSize() > 1) {
    // Extract the two ropes with the smallest lengths from the heap
    const rope1 = minHeap.extractMin();
    const rope2 = minHeap.extractMin();

    // Connect the two ropes and add the resulting rope to the heap
    const newRope = rope1 + rope2;
    minHeap.insert(newRope);

    // Add the cost of connecting the two ropes to the total cost
    totalCost += newRope;
  }

  return totalCost;
}
    
