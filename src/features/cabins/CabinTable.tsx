import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';
import Spinner from '../../ui/Spinner';

export default function CabinTable() {
	const { isLoading } = useQuery({
		queryKey: ['cabins'],
		queryFn: getCabins,
	});

	if (isLoading) return <Spinner />;

	return <div>Table</div>;
}
